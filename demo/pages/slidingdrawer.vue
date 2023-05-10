<style lang="scss">
#slidingdrawer {
  background-color: $--color-bg-gray;
}
</style>

<template>
  <div id="slidingdrawer">
    <div class="item">
      <VButton @click="open = !open">打开</VButton>
      <VSlidingDrawer v-model="open" height="50%">
        <div>start</div>
        <div v-for="item in 100" :key="item">{{ item }}</div>
        <div>end</div>
      </VSlidingDrawer>
    </div>
  </div>
</template>

<script>
import VButton from '~/src/components/button/button'
import VSlidingDrawer from '~/src/components/slidingdrawer/slidingdrawer'

export default {
  components: {
    VButton,
    VSlidingDrawer
  },
  data() {
    return {
      open: false
    }
  },
  head() {
    return {
      title: '滑动抽屉'
    }
  }
}
</script>
