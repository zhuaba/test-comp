<template>
  <div class="v-field" :style="fieldWrapStyle">
    <div :class="{ 'v-field__before--line': beforeLine, 'v-field__before--has': hasBefore }" class="v-field__before">
      <template v-if="label">
        {{ label }}
      </template>
      <template v-else>
        <slot name="before" />
      </template>
    </div>
    <div class="v-field__main">
      <slot>
        <div v-if="showClose && score" class="v-field__cancel" @click="clear">
          <i class="bili-font ic_input_close" />
        </div>
        <div :class="{ 'v-field__input--error': showError, 'v-field__input--close': showClose }" class="v-field__input">
          <input
            v-if="isInput"
            v-model="score"
            :disabled="disabled"
            v-bind="inputAttr"
            @focus="emitFocus"
            @blur="emitBlur"
            @input="emitChange"
          />
          <div v-else class="v-field__textarea">
            <div v-if="isAutoSize" :class="{ 'v-field__textarea--auto': isAutoSize }">
              <pre v-if="isAutoSize" :style="preShimStyle" v-text="score" />
              <textarea v-model="score" :disabled="disabled" v-bind="inputAttr" @focus="emitFocus" @blur="emitBlur" />
            </div>
            <textarea
              v-else
              v-model="score"
              :disabled="disabled"
              :rows="minRow"
              v-bind="inputAttr"
              @focus="emitFocus"
              @blur="emitBlur"
            />
            <div v-if="counter" class="v-field__counter" v-text="maxLen ? `${score.length}/${maxLen}` : score.length" />
          </div>
        </div>
      </slot>
    </div>
    <div :class="{ 'v-field__after--line': afterLine, 'v-field__after--has': hasAfter }" class="v-field__after">
      <slot name="after" />
    </div>
  </div>
</template>

<script>
import '../../theme/field.scss'

export default {
  name: 'VField',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    attr: {
      type: Object,
      default: () => {
        return {
          type: 'text'
        }
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    minRow: {
      type: Number,
      default: 1
    },
    maxRow: {
      type: Number,
      default: 1
    },
    maxLen: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    label: {
      type: String,
      default: ''
    },
    close: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Boolean,
      default: false
    },
    beforeLine: {
      type: Boolean,
      default: false
    },
    afterLine: {
      type: Boolean,
      default: false
    },
    error: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: 'start'
    }
  },
  data() {
    return {
      score: this.value,
      showError: !!this.error
    }
  },
  computed: {
    hasBefore() {
      return !!this.$slots.before || this.label
    },
    hasAfter() {
      return !!this.$slots.after
    },
    showClose() {
      return this.close && this.isInput && !this.disabled
    },
    inputAttr() {
      const result = {
        placeholder: this.placeholder,
        type: this.type,
        ...this.attr
      }
      if (this.maxLen) {
        result.maxLength = this.maxLen
      }
      return result
    },
    isInput() {
      return this.minRow === 1 && this.maxRow === 1
    },
    isAutoSize() {
      return this.maxRow > this.minRow || this.maxRow === 0
    },
    preShimStyle() {
      const style = {}
      if (this.maxRow) {
        style['-webkit-line-clamp'] = this.maxRow
      }
      if (this.minRow > 1) {
        // TODO：这里写死了 line-height 是 20px
        style['min-height'] = `${20 * this.minRow}px`
      }
      return style
    },
    fieldWrapStyle() {
      const result = {}
      if (this.align === 'end') {
        result.alignItems = 'flex-end'
      } else if (this.align === 'center') {
        result.alignItems = 'center'
      } else {
        result.alignItems = 'flex-start'
      }
      return result
    }
  },
  watch: {
    value(val) {
      this.showError = false
      this.score = val
    },
    score(val) {
      this.showError = false
      this.$emit('input', typeof val === 'string' ? val.trim() : val)
    },
    error(val) {
      this.showError = !!val
    }
  },
  methods: {
    clear() {
      this.score = ''
    },
    emitFocus(evt) {
      this.$emit('focus', evt)
    },
    emitBlur(evt) {
      setTimeout(() => {
        this.$emit('blur', evt)
        this.$emit('change', this.score)
      }, 0)
    },
    emitChange() {
      this.$emit('change', this.score)
    }
  }
}
</script>
