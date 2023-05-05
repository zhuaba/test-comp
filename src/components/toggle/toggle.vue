<template>
  <button
    :class="[
      { 'v-toggle--disabled': disabled, 'v-toggle--loading': loading },
      [isAndroid ? 'v-toggle--md' : 'v-toggle--ios'],
      [selected ? 'v-toggle--on' : 'v-toggle--off'],
      `v-toggle--${size}`
    ]"
    class="v-toggle"
    :style="{
      backgroundColor: selected ? activeColor : inactiveColor
    }"
    @click="handle"
  >
    <i class="v-toggle__background" :style="{ backgroundColor: inactiveColor }" />
    <span class="v-toggle__core">
      <svg v-if="loading" viewBox="25 25 50 50">
        <circle
          :style="{
            stroke: activeColor
          }"
          cx="50"
          cy="50"
          r="20"
          fill="none"
        />
      </svg>
    </span>
  </button>
</template>

<script>
import '../../theme/toggle.scss'

export default {
  name: 'VToggle',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Function,
      default: null
    },
    size: {
      type: String,
      default: 'normal'
    },
    activeColor: {
      type: String,
      default: undefined
    },
    inactiveColor: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  computed: {
    isAndroid() {
      return this.$sakura ? this.$sakura.md : false
    }
  },
  watch: {
    value(val) {
      this.selected = val
    },
    selected(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handle() {
      if (this.disabled || this.loading) {
        return
      }
      if (!this.confirm) {
        this.change()
        return
      }
      const result = this.confirm()
      if (!result) {
        this.change()
        return
      }
      result.then(() => {
        this.change()
      })
    },
    change() {
      this.selected = !this.selected
      this.$emit('change', this.selected)
    }
  }
}
</script>
