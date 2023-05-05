<template>
  <div class="v-datetime">
    <span @click="open">
      <slot>{{ inputValue || placeholder }}</slot>
    </span>
    <VDialog v-model="isOpen" :lock="false" height="auto">
      <DatetimePopup :type="type" :datetime="propsDate" :max="max" :min="min" @confirm="confirm" @cancel="close" />
    </VDialog>
  </div>
</template>

<script>
import VDialog from '../dialog/dialog'
import { isServer } from '../../utils/helper'
import DatetimePopup from './components/datetimePopup'
import { adjustDate, parseDateProps, pad } from './util'
import '../../theme/datetime.scss'

export default {
  name: 'VDatetime',
  components: {
    VDialog,
    DatetimePopup
  },
  props: {
    value: {
      required: true,
      type: String
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
    },
    placeholder: {
      type: String,
      default: '请选择时间'
    }
  },
  data() {
    return {
      isOpen: false,
      datetime: adjustDate(this.value)
    }
  },
  computed: {
    inputValue() {
      if (isServer || !this.datetime) {
        return ''
      }

      const dateObj = parseDateProps(this.datetime)

      const date = `${dateObj.year}年${dateObj.month}月${dateObj.day}日`
      if (this.type === 'date') {
        return date
      }

      const time = `${pad(dateObj.hour)}:${pad(dateObj.minutes)}`
      if (this.type === 'time') {
        return time
      }

      return `${date} ${time}`
    },
    propsDate() {
      return this.datetime || new Date()
    }
  },
  watch: {
    value(newValue) {
      this.datetime = adjustDate(newValue)
    }
  },
  created() {
    if (isServer) {
      return
    }
    this.emitInput()
  },
  methods: {
    emitInput() {
      if (!this.datetime) {
        return ''
      }

      const dateObj = parseDateProps(this.datetime)
      const date = `${dateObj.year}/${dateObj.month}/${dateObj.day}`
      const time = `${pad(dateObj.hour)}:${pad(dateObj.minutes)}`

      this.$emit('input', `${date} ${time}:${pad(dateObj.seconds)}`)
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
      this.$emit('close')
    },
    confirm(datetime) {
      this.datetime = datetime
      this.emitInput()
      this.close()
    }
  }
}
</script>
