<template>
  <div class="v-datetime-popup">
    <div class="v-datetime-popup__header">
      <div v-if="type !== 'time'" class="v-datetime-popup__year" @click="showYear">{{ dateObj.year }}</div>
      <div v-if="type !== 'time'" class="v-datetime-popup__date" @click="showMonth">
        {{ `${dateObj.month}月${dateObj.day}日` }}
      </div>
    </div>
    <div class="v-datetime-popup__body">
      <DatetimeYearPicker v-if="step === 'year'" :max="max" :min="min" :year="dateObj.year" @change="onChangeYear" />
      <DatetimeMonthPicker
        v-if="step === 'month'"
        :year="dateObj.year"
        :month="dateObj.month"
        :max="max"
        :min="min"
        @change="onChangeMonth"
      />
      <DatetimeCalendar
        v-if="step === 'date'"
        :year="dateObj.year"
        :month="dateObj.month"
        :day="dateObj.day"
        :max="max"
        :min="min"
        @change="onChangeDate"
      />
      <DatetimeTimePicker
        v-if="step === 'time'"
        :hour="dateObj.hour"
        :minute="dateObj.minutes"
        :date="newDatetime"
        :max="max"
        :min="min"
        @change="onChangeTime"
      />
    </div>
    <div class="v-datetime-popup__actions">
      <div class="v-datetime-popup__actions__button v-datetime-popup__actions__button--cancel" @click="cancel">
        取消
      </div>
      <div class="v-datetime-popup__actions__button v-datetime-popup__actions__button--confirm" @click="confirm">
        确定
      </div>
    </div>
  </div>
</template>

<script>
import { createFlowManagerFromType, parseDateProps, generateDate } from '../util'
import DatetimeCalendar from './datetimeCalendar'
import DatetimeTimePicker from './datetimeTimePicker'
import DatetimeYearPicker from './datetimeYearPicker'
import DatetimeMonthPicker from './datetimeMonthPicker'

export default {
  components: {
    DatetimeCalendar,
    DatetimeTimePicker,
    DatetimeYearPicker,
    DatetimeMonthPicker
  },
  props: {
    datetime: {
      type: Date,
      required: true
    },
    type: {
      type: String,
      default: 'date'
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    const flowManager = createFlowManagerFromType(this.type)
    return {
      newDatetime: this.datetime,
      flowManager,
      step: flowManager.first()
    }
  },
  computed: {
    dateObj() {
      return parseDateProps(this.newDatetime)
    }
  },
  methods: {
    nextStep() {
      this.step = this.flowManager.next(this.step)

      if (this.step === 'end') {
        this.$emit('confirm', this.newDatetime)
        this.step = this.flowManager.first()
      }
    },
    showYear() {
      this.step = 'year'
      this.flowManager.diversion('date')
    },
    showMonth() {
      this.step = 'month'
      this.flowManager.diversion('date')
    },
    confirm() {
      this.nextStep()
    },
    cancel() {
      this.$emit('cancel')
    },
    onChangeYear(year) {
      const obj = this.dateObj
      this.newDatetime = generateDate(year, obj.month, obj.day, obj.hour, obj.minutes, obj.seconds)
    },
    onChangeMonth(month) {
      const obj = this.dateObj
      this.newDatetime = generateDate(obj.year, month, obj.day, obj.hour, obj.minutes, obj.seconds)
    },
    onChangeDate(year, month, day) {
      const obj = this.dateObj
      this.newDatetime = generateDate(year, month, day, obj.hour, obj.minutes, obj.seconds)
    },
    onChangeTime({ hour, minute }) {
      const obj = this.dateObj
      if (hour) {
        this.newDatetime = generateDate(obj.year, obj.month, obj.day, hour, obj.minutes, obj.seconds)
      }

      if (minute) {
        this.newDatetime = generateDate(obj.year, obj.month, obj.day, obj.hour, minute, obj.seconds)
      }
    }
  }
}
</script>
