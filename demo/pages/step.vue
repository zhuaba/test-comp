<style lang="scss">
#step {
  @include dark-elem(color, $--color-text);
  .v-step--vertical {
    padding: 0 20px;
  }

  > p {
    padding: 20px 0 10px 20px;
  }
}
</style>

<template>
  <div id="step">
    <p>水平</p>
    <VStep :list="['确认账号', '明确条款', '注销原因', '身份认证']" :current="2" @click="handleClick" />
    <p>水平，反向</p>
    <VStep :list="['确认账号', '明确条款', '注销原因', '身份认证']" :current="2" desc />
    <p>竖直</p>
    <VStep :list="['确认账号', '明确条款', '注销原因', '身份认证']" :current="2" vertical />
    <p>竖直，反向</p>
    <VStep :list="['确认账号', '明确条款', '注销原因', '身份认证']" :current="2" vertical desc />
  </div>
</template>

<script>
import VStep from '~/src/components/step/step'

export default {
  name: 'Step',
  components: {
    VStep
  },
  head() {
    return {
      title: '步骤条'
    }
  },
  methods: {
    handleClick(index) {
      this.$toast.info(index)
    }
  }
}
</script>
