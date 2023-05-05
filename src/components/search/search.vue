<template>
  <div :class="{ 'v-search--fixed': fixed, 'v-search--border': showBorder, 'v-search--nav': isNav }" class="v-search">
    <div class="v-search__shim" />
    <div class="v-search__body">
      <div class="v-search__wrap">
        <div v-if="showCancel" class="v-search__cancel" @click="handleCancel">取消</div>
        <div class="v-search__box">
          <div class="v-search__icon v-search__icon--query">
            <i class="bili-font ic_search" />
          </div>
          <div v-if="close && text" class="v-search__icon v-search__icon--close" @click="handleRemove">
            <i class="bili-font ic_input_close" />
          </div>
          <form class="v-search__form" method="get" action="#" @submit.prevent="submit(false)">
            <input
              v-model="text"
              v-bind="attr"
              :placeholder="placeholder"
              type="search"
              @focus="handleFocus"
              @blur="handleBlur"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../theme/search.scss'
import { debounce } from 'throttle-debounce'

export default {
  name: 'VSearch',
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '搜索词'
    },
    attr: {
      type: Object,
      default: () => {}
    },
    fixed: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: true
    },
    realtime: {
      type: Boolean,
      default: false
    },
    stayCancel: {
      type: Boolean,
      default: false
    },
    showBorder: {
      type: Boolean,
      default: false
    },
    isNav: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      text: this.value,
      isFocus: false
    }
  },
  computed: {
    showCancel() {
      if (this.stayCancel) {
        return true
      }
      return this.isFocus || this.text
    }
  },
  watch: {
    text(val) {
      this.$emit('input', val)
      if (this.realtime) {
        this.submit(true)
      }
    },
    value(val) {
      this.text = val
    }
  },
  methods: {
    handleCancel() {
      this.$emit('cancel')
    },
    handleRemove() {
      this.text = ''
    },
    handleFocus() {
      this.isFocus = true
      this.$emit('focus')
    },
    handleBlur() {
      this.$emit('blur')
      setTimeout(() => {
        this.isFocus = false
      }, 20)
    },
    submit: debounce(150, function (isChange) {
      this.$emit(isChange ? 'change' : 'submit')
    })
  }
}
</script>
