<template>
  <PickerCore class="datetime-picker" :list="months" :value-data.sync="valueData" :item-count="7" />
</template>

<script>
import { monthIsDisabled, months } from '../util'
import PickerCore from '../../picker/pickerCore'

export default {
  components: {
    PickerCore
  },
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
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
      valueData: this.month
    }
  },
  computed: {
    months() {
      return months(this.month).map((month, index) => ({
        text: month,
        value: ++index,
        disabled: !index || monthIsDisabled(this.min, this.max, this.year, index)
      }))
    }
  },
  watch: {
    valueData(val) {
      this.$emit('change', parseInt(val))
    }
  }
}
</script>
