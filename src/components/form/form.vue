<template>
  <div class="v-form" :class="{ 'is-loading': loading, 'is-full': full }">
    <slot />
    <ul v-if="error && errors.length" class="v-form__errors">
      <li v-for="err in errors" :key="err" v-text="err" />
    </ul>
    <div class="v-form__submit" @click="submit">
      <slot name="submit">
        <VButton :loading="loading" size="large" block>提交</VButton>
      </slot>
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator'
import VButton from '../button/button'
import '../../theme/form.scss'

export default {
  name: 'VForm',
  components: {
    VButton
  },
  props: {
    rule: {
      type: Object,
      default: () => null
    },
    form: {
      type: Object,
      default: () => null
    },
    loading: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      errors: []
    }
  },
  methods: {
    submit() {
      this.errors = []
      if (!this.rule || !this.form) {
        this.$emit('submit')
        return
      }
      const validator = new Schema(this.rule)
      validator
        .validate(this.form)
        .then(() => {
          this.$emit('submit')
        })
        .catch(({ errors, fields }) => {
          this.$emit('error', { errors, fields })
          this.errors = errors.map((_) => _.message)
        })
    }
  }
}
</script>
