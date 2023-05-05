<template>
  <PickerCore
    class="datetime-picker"
    :list="hours"
    :value-data.sync="valueData"
    label-name="number"
    value-name="number"
    :item-count="7"
  />
</template>

<script>
import { hours, minutes, pad, timeComponentIsDisabled, parseDateProps } from '../util'
import PickerCore from '../../picker/pickerCore'

export default {
  components: {
    PickerCore
  },
  props: {
    date: {
      type: Date,
      required: true
    },
    hour: {
      type: Number,
      required: true
    },
    minute: {
      type: Number,
      required: true
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
      valueData: [pad(this.hour), pad(this.minute)],
      lastValue: [pad(this.hour), pad(this.minute)]
    }
  },
  computed: {
    hours() {
      return hours().map((hour) => ({
        number: pad(hour),
        disabled: timeComponentIsDisabled(this.minHour, this.maxHour, hour),
        children: this.minutes
      }))
    },
    minutes() {
      return minutes().map((minute) => ({
        number: pad(minute),
        disabled: timeComponentIsDisabled(this.minMinute, this.maxMinute, minute)
      }))
    },
    minHour() {
      if (!this.min) {
        return null
      }
      const minObj = parseDateProps(this.min)
      const curObj = parseDateProps(this.date)
      if (curObj.year !== minObj.year || curObj.month !== minObj.month || curObj.day !== minObj.day) {
        return null
      }
      return minObj.hour
    },
    minMinute() {
      if (!this.min) {
        return null
      }
      const minObj = parseDateProps(this.min)
      const curObj = parseDateProps(this.date)
      if (curObj.year !== minObj.year || curObj.month !== minObj.month || curObj.day !== minObj.day) {
        return null
      }
      return minObj.minutes
    },
    maxHour() {
      if (!this.max) {
        return null
      }
      const maxObj = parseDateProps(this.max)
      const curObj = parseDateProps(this.date)
      if (curObj.year !== maxObj.year || curObj.month !== maxObj.month || curObj.day !== maxObj.day) {
        return null
      }
      return maxObj.hour
    },
    maxMinute() {
      if (!this.max) {
        return null
      }
      const maxObj = parseDateProps(this.max)
      const curObj = parseDateProps(this.date)
      if (curObj.year !== maxObj.year || curObj.month !== maxObj.month || curObj.day !== maxObj.day) {
        return null
      }
      return maxObj.minutes
    }
  },
  watch: {
    valueData(newVal) {
      const value = newVal[0] === this.lastValue[0] ? { minute: parseInt(newVal[1]) } : { hour: parseInt(newVal[0]) }
      this.lastValue = [...newVal]
      this.$emit('change', value)
    }
  }
}
</script>
