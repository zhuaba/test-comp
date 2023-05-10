<style lang="scss">
#search {
  @include dark-elem(color, $--color-text);
}
</style>

<template>
  <div id="search">
    <VSearch
      v-model="value"
      :attr="{ maxLength: 12 }"
      fixed
      show-cancel
      show-border
      realtime
      @blur="handleBlur"
      @focus="handleFocus"
      @cancel="handleCancel"
      @submit="handleSubmit"
      @change="handleChange"
    />
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
  </div>
</template>

<script>
import VSearch from '~/src/components/search/search'

export default {
  name: 'Search',
  components: {
    VSearch
  },
  layout: 'empty',
  data() {
    return {
      value: ''
    }
  },
  head() {
    return {
      title: '搜索框'
    }
  },
  methods: {
    handleBlur() {
      this.$toast.info('blur')
    },
    handleFocus() {
      this.$toast.info('focus')
    },
    handleCancel() {
      this.$toast.info('cancel')
    },
    handleSubmit() {
      this.$toast.info('submit')
    },
    handleChange() {
      this.$toast.info('change：' + Date.now())
    }
  }
}
</script>
