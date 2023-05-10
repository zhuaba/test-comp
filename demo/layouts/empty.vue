<style lang="scss">
.layout-empty {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  @include night() {
    background-color: #0c0c0c;
  }
}
</style>

<template>
  <div class="layout-empty">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'Empty',
  computed: {
    isNight() {
      return this.$route.query.night === '1'
    }
  },
  mounted() {
    this.initNightMode()
  },
  methods: {
    initNightMode() {
      if (this.isNight) {
        document.querySelector('html').classList.add('night-mode')
      }
    }
  }
}
</script>
