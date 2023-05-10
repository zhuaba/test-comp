<style lang="scss">
#toggle {
  @include dark-elem(color, $--color-text);
}
</style>

<template>
  <div id="toggle" class="container">
    <div>
      <span>normal：</span>
      <VToggle v-model="value_1" />
    </div>
    <div>
      <span>confirm：</span>
      <VToggle v-model="value_5" :confirm="confirm" />
    </div>
    <div>
      <span>loading on：</span>
      <VToggle v-model="value_6" loading />
    </div>
    <div>
      <span>loading off：</span>
      <VToggle v-model="value_2" loading />
    </div>
    <div>
      <span>disabled on：</span>
      <VToggle v-model="value_3" disabled />
    </div>
    <div>
      <span>disabled off：</span>
      <VToggle v-model="value_4" disabled />
    </div>
    <div>
      <span>definde background：<br />activeColor、inactiveColor</span>
      <br />
      <VToggle v-model="value_7" loading active-color="#13ce66" inactive-color="#ff4949" />
    </div>
    <div>
      <span>size：<br />small、normal、large</span>
      <br />
      <VToggle v-model="value_7" loading size="small" />
      <VToggle v-model="value_7" loading size="normal" />
      <VToggle v-model="value_7" loading size="large" />
    </div>
  </div>
</template>

<script>
import VToggle from '~/src/components/toggle/toggle'

export default {
  name: 'Toggle',
  components: {
    VToggle
  },
  data() {
    return {
      value_1: true,
      value_2: false,
      value_6: true,
      value_3: true,
      value_4: false,
      value_5: false,
      loading: true,
      disabled: true,
      value_7: true
    }
  },
  head() {
    return {
      title: '开关'
    }
  },
  methods: {
    confirm() {
      if (!this.value_5) {
        return
      }
      return new Promise((resolve, reject) => {
        this.$alert({
          title: '提示',
          message: '确定要修改状态吗？',
          buttons: ['取消', '确定'],
          callback: (index) => {
            index ? resolve() : reject() // eslint-disable-line prefer-promise-reject-errors
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  & > div {
    padding: 5px;
  }
}
</style>
