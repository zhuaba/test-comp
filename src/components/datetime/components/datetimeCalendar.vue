<template>
  <div class="v-datetime-calendar">
    <div class="v-datetime-calendar__navigation">
      <div class="v-datetime-calendar__navigation--previous" @click="previousMonth">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.3 102.8">
          <path fill="none" stroke="#444" stroke-width="14" stroke-miterlimit="10" d="M56.3 97.8L9.9 51.4 56.3 5" />
        </svg>
      </div>
      <div class="v-datetime-calendar__current--month">{{ monthName }} {{ newYear }}</div>
      <div class="v-datetime-calendar__navigation--next" @click="nextMonth">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.3 102.8">
          <path fill="none" stroke="#444" stroke-width="14" stroke-miterlimit="10" d="M56.3 97.8L9.9 51.4 56.3 5" />
        </svg>
      </div>
    </div>
    <div class="v-datetime-calendar__month">
      <div v-for="(weekday, index) in weekdays" :key="`week-${index}`" class="v-datetime-calendar__month__weekday">
        {{ weekday }}
      </div>
      <div
        v-for="(item, index) in days"
        :key="index"
        :class="{
          'v-datetime-calendar__month__day--selected': item.selected,
          'v-datetime-calendar__month__day--disabled': item.disabled
        }"
        class="v-datetime-calendar__month__day"
        @click="selectDay(item)"
      >
        <span>
          <span>{{ item.number }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { monthDayIsDisabled, monthDays, months, weekdays, generateDate, parseDateProps } from '../util'

export default {
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    day: {
      type: Number,
      default: null
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
    return {
      newValue: generateDate(this.year, this.month),
      weekdays: weekdays(0),
      months: months()
    }
  },
  computed: {
    newYear() {
      const obj = parseDateProps(this.newValue)
      return obj.year
    },
    newMonth() {
      const obj = parseDateProps(this.newValue)
      return obj.month
    },
    monthName() {
      return this.months[this.newMonth - 1]
    },
    days() {
      const result = monthDays(this.newYear, this.newMonth).map((day) => ({
        number: day,
        selected: day && this.year === this.newYear && this.month === this.newMonth && this.day === day,
        disabled: !day || monthDayIsDisabled(this.min, this.max, this.newYear, this.newMonth, day)
      }))
      if (result[6] && result[6].number === null) {
        return result.slice(6, -1)
      }
      return result
    }
  },
  methods: {
    selectDay(day) {
      if (day.disabled) {
        return
      }

      this.$emit('change', this.newYear, this.newMonth, day.number)
    },
    previousMonth() {
      const obj = parseDateProps(this.newValue)
      if (obj.month === 1) {
        this.newValue = generateDate(obj.year - 1, 12)
      } else {
        this.newValue = generateDate(obj.year, obj.month - 1)
      }
    },
    nextMonth() {
      const obj = parseDateProps(this.newValue)
      if (obj.month === 12) {
        this.newValue = generateDate(obj.year + 1, 1)
      } else {
        this.newValue = generateDate(obj.year, obj.month + 1)
      }
    }
  }
}
</script>
