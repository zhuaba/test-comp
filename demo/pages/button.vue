<style lang="scss">
#button {
  p {
    padding: 10px 0;
    @include night() {
      color: #e1e1e1;
    }
  }

  button {
    margin-bottom: 15px;
  }
}
</style>

<template>
  <div id="button" class="container">
    <p>色彩</p>
    <v-button>默认按钮</v-button>
    <v-button theme="success">成功按钮</v-button>
    <v-button theme="info">信息按钮</v-button>
    <v-button theme="warning">警告按钮</v-button>
    <v-button theme="danger">危险按钮</v-button>
    <p>镂空</p>
    <v-button plain>朴素按钮</v-button>
    <v-button theme="success" plain>成功按钮</v-button>
    <v-button theme="info" plain>信息按钮</v-button>
    <v-button theme="warning" plain>警告按钮</v-button>
    <v-button theme="danger" plain>危险按钮</v-button>
    <p>文字</p>
    <v-button text>文字按钮</v-button>
    <v-button theme="success" text>成功按钮</v-button>
    <v-button theme="info" text>信息按钮</v-button>
    <v-button theme="warning" text>警告按钮</v-button>
    <v-button theme="danger" text>危险按钮</v-button>
    <p>等待</p>
    <v-button loading>等待按钮</v-button>
    <v-button loading plain>等待按钮</v-button>
    <v-button loading text>文字按钮</v-button>
    <v-button theme="info" loading plain>等待按钮</v-button>
    <v-button theme="success" loading>等待按钮</v-button>
    <v-button theme="success" loading plain>等待按钮</v-button>
    <v-button theme="success" loading text>文字按钮</v-button>
    <v-button :loading="loading" :delay="1000" @click="delayLoading">延迟等待</v-button>
    <p>禁用</p>
    <v-button disabled>默认按钮</v-button>
    <v-button theme="success" disabled>成功按钮</v-button>
    <v-button theme="info" disabled>信息按钮</v-button>
    <v-button theme="warning" disabled>警告按钮</v-button>
    <v-button theme="danger" disabled>危险按钮</v-button>
    <p>块级</p>
    <v-button block>默认按钮</v-button>
    <v-button block theme="success">成功按钮</v-button>
    <v-button block theme="info">信息按钮</v-button>
    <v-button block theme="warning">警告按钮</v-button>
    <v-button block theme="danger">危险按钮</v-button>
    <p>尺寸</p>
    <v-button size="small">小尺寸</v-button>
    <v-button>普通尺寸</v-button>
    <v-button size="large">大尺寸</v-button>
    <p>圆角</p>
    <v-button size="small" round>小尺寸</v-button>
    <v-button round>普通尺寸</v-button>
    <v-button size="large" round>大尺寸</v-button>
  </div>
</template>

<script>
import VButton from '~/src/components/button/button'

export default {
  name: 'Button',
  components: {
    VButton
  },
  data() {
    return {
      loading: false
    }
  },
  head() {
    return {
      title: '按钮'
    }
  },
  methods: {
    delayLoading() {
      this.$toast.info('click')
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>
