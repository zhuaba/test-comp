<template>
  <div id="toast" class="container">
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
    <button @click="showToast('info')">info</button>
    <button @click="showToast('error')">error</button>
    <button @click="showToast('success')">success</button>
    <button @click="showToast('loading')">loading</button>
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
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  head() {
    return {
      title: '提示'
    }
  },
  methods: {
    showToast(type) {
      if (type === 'loading') {
        this.$toast.loading('loading')
        setTimeout(() => {
          this.$toast.stop()
        }, 5000)
        return
      }
      this.$toast[type]({
        tip: type,
        el: '#toast'
      }).then(() => {
        // do something
      })
    }
  }
}
</script>
