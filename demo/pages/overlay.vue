<style lang="scss"></style>

<template>
  <div id="overlay" class="container">
    <button @click="showOverlay">button</button>
  </div>
</template>

<script>
import overlay from '~/src/prototypes/overlay'

export default {
  name: 'Overlay',
  head() {
    return {
      title: '遮罩'
    }
  },
  methods: {
    showOverlay() {
      overlay.show({
        click: () => {
          overlay.hide()
        }
      })
    }
  }
}
</script>
