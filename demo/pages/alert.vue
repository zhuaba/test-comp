<style lang="scss"></style>

<template>
  <div id="alert" class="container">
    <button @click="showAlert">alert</button>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <button @click="showConfirm">confirm</button>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <button @click="showVertical">vertical</button>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <button @click="showPrompt">prompt</button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  head() {
    return {
      title: '弹窗'
    }
  },
  methods: {
    showAlert() {
      this.$alert({
        title: 'Use this lightsaber?',
        message: 'Do you agree to use this lightsaber to do good across the galaxy?',
        buttons: '确认',
        maskClose: true,
        callback: (index) => {
          this.$toast.info('click index：' + index)
        }
      })
    },
    showConfirm() {
      this.$alert({
        title: 'Use this lightsaber?',
        message: 'Do you agree to use this lightsaber to do good across the galaxy?',
        buttons: ['取消', '确认'],
        maskClose: true,
        callback: (index) => {
          this.$toast.info('click index：' + index)
        }
      })
    },
    showVertical() {
      this.$alert({
        title: 'Use this lightsaber?',
        message: 'Do you agree to use this lightsaber to do good across the galaxy?',
        buttons: ['取消', '确认', '随便'],
        maskClose: true,
        vertical: true,
        callback: (index) => {
          this.$toast.info('click index：' + index)
        }
      })
    },
    showPrompt() {
      this.$alert({
        title: 'Use this lightsaber?',
        message: 'Do you agree to use this lightsaber to do good across the galaxy?',
        input: {
          type: 'tel',
          placeholder: '请输入',
          maxLength: 6
        },
        buttons: ['取消', '确认'],
        maskClose: true,
        callback: (index, value) => {
          this.$toast.info('click index：' + index, '，value：' + value)
        }
      })
    }
  }
}
</script>
