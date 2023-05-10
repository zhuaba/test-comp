<style lang="scss">
#switcher-fixed {
  height: 100%;

  .banner {
    background-color: #4fc08d;
    height: 200px;
  }

  .others {
    padding: 10px;
    background-color: lightgray;
  }

  .v-switcher {
    &__content__item {
      padding: 10px;
    }
  }
}
</style>

<template>
  <div id="switcher-fixed">
    <div class="banner" />
    <VSwitcher :headers="headers" :fixed-top="69">
      <template #0>
        <p>start</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>000</p>
        <p>end</p>
      </template>
      <template #1>
        <p>start</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>end</p>
      </template>
    </VSwitcher>
    <div class="others">
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
      <p>233</p>
    </div>
  </div>
</template>

<script>
import VSwitcher from '~/src/components/switcher'

export default {
  name: 'SwitcherHeader',
  components: {
    VSwitcher
  },
  computed: {
    headers() {
      return ['tab-0', 'tab-1']
    }
  }
}
</script>
