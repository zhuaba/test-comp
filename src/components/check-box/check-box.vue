<template>
  <div
    class="v-check-box"
    :class="[
      `v-check-box--${size}`,
      `v-check-box--${radioPosition}`,
      { 'v-check-box--circle': circle },
      { 'v-check-box--inline': inline }
    ]"
    @click="handleClick"
  >
    <div class="v-check-box__label" :class="[{ 'is-selected': isSelected }, { 'is-disabled': isDisabled }]" />
    <div class="v-check-box__text">
      <slot />
    </div>
  </div>
</template>

<script>
import '../../theme/check-box.scss'
import { isArray } from '../../utils/types'

export default {
  name: 'VCheckBox',
  props: {
    value: {
      type: [Boolean, Array],
      required: true
    },
    id: {
      type: [Number, String],
      default: ''
    },
    size: {
      type: String,
      default: 'normal',
      validator: (val) => ~['normal', 'small'].indexOf(val)
    },
    max: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    radioPosition: {
      type: String,
      default: 'left',
      validator: (val) => ~['left', 'right'].indexOf(val)
    },
    confirm: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      selectedData: this.value
    }
  },
  computed: {
    isSelected() {
      if (isArray(this.selectedData)) {
        // eslint-disable-next-line
        return this.selectedData.indexOf(this.id) !== -1
      }
      return this.selectedData
    },
    isDisabled() {
      return this.disabled
    }
  },
  watch: {
    value(val) {
      this.selectedData = val
    },
    selectedData(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  methods: {
    handleClick() {
      if (this.isDisabled) {
        return
      }

      const result = this.validate()
      if (!result) {
        return
      }

      if (!isArray(this.selectedData)) {
        this.selectedData = !this.selectedData
        return
      }

      if (this.isSelected) {
        this.selectedData.splice(this.selectedData.indexOf(this.id), 1)
        return
      }

      if (this.max && this.selectedData.length >= this.max) {
        if (this.max !== 1) {
          return
        }
        this.selectedData.shift()
      }

      this.selectedData.push(this.id)
    },
    validate() {
      if (!this.confirm) {
        return true
      }
      return this.confirm(this.selectedData)
    }
  }
}
</script>
