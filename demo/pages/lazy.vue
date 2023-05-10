<style lang="scss">
.v-lazy {
  &__placeholder {
    height: 22px;
    background-color: red;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>

<template>
  <div id="lazy">
    <VLazy never>
      <p>SSR时就渲染的组件</p>
    </VLazy>
    <VLazy transition="fade">
      <p>首屏则只在客户端渲染</p>
    </VLazy>
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
    <VLazy>
      <p>进入视口就自动加载</p>
    </VLazy>
    <VLazy event="click">
      <p>点击后加载的组件</p>
    </VLazy>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
  </div>
</template>

<script>
import VLazy from '~/src/components/lazy/lazy'

export default {
  name: '',
  components: {
    VLazy
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
