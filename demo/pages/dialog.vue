<style lang="scss">
#dialog {
  @include dark-elem(color, $--color-text);
}

.no-mask-dialog {
  .v-dialog__core {
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(80, 80, 80, 0.5);
    border: 1px solid $--color-text;
  }

  .outer {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border: 1px solid $--color-text;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
  }
}
</style>

<template>
  <div id="dialog">
    <h1>start</h1>
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
    <p>
      <button @click="show1 = !show1">打开一个无动画对话框</button>
    </p>
    <p>
      <button @click="show2 = !show2">打开一个 iOS 动画的对话框</button>
    </p>
    <p>
      <button @click="show3 = !show3">打开一个 Android 动画的对话框</button>
    </p>
    <p>
      <button @click="show4 = !show4">打开一个从下向上的对话框</button>
    </p>
    <p>
      <button @click="show6 = !show6">打开一个弹出的对话框</button>
    </p>
    <p>
      <button @click="show5 = !show5">打开一个没有遮罩的对话框</button>
    </p>
    <VDialog v-model="show1" background="#f00" @open="handleOpen" @close="handleClose"> DIO </VDialog>
    <VDialog v-model="show2" padding="60px 50px 20px" :background="dialogBg" transition="ios">
      <h1>start</h1>
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
      <h1>end</h1>
    </VDialog>
    <VDialog v-model="show3" transition="md"> DIO </VDialog>
    <VDialog v-model="show6" transition="scale"> DIO </VDialog>
    <VDialog v-model="show4" transition="popup"> DIO </VDialog>
    <VDialog v-model="show5" :mask-close="false" class="no-mask-dialog">
      <template #header>头部元素！！！！</template>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <p>DIO</p>
      <template #footer>底部元素！！！！</template>
      <div slot="outer" class="outer" @click="show5 = false">关闭</div>
    </VDialog>
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
    <h1>end</h1>
  </div>
</template>

<script>
import DialogBg from '../assets/img/dialog.png'
import VDialog from '~/src/components/dialog/dialog'

export default {
  name: 'Dialog',
  components: {
    VDialog
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  },
  head() {
    return {
      title: '对话框'
    }
  },
  computed: {
    dialogBg() {
      return DialogBg
    }
  },
  methods: {
    handleOpen() {
      this.$toast.info('open')
    },
    handleClose() {
      this.$toast.info('close')
    }
  }
}
</script>
