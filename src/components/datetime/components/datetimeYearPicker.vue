<template>
  <PickerCore class="datetime-picker" :list="years" :value-data.sync="valueData" value-name="text" :item-count="7" />
</template>

<script>
import { yearIsDisabled, years } from '../util'
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
      valueData: this.year
    }
  },
  computed: {
    years() {
      return years(this.year).map((year) => ({
        text: year,
        disabled: !year || yearIsDisabled(this.min, this.max, year)
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
