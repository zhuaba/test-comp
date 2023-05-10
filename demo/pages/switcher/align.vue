<style lang="scss">
#switcher-align {
  .v-switcher {
    height: 150px;

    &__content__item {
      padding: 10px;
    }
  }
}
</style>

<template>
  <div id="switcher-align">
    <VSwitcher :headers="headers" align="start">
      <template #0> align：start </template>
    </VSwitcher>
    <VSwitcher :headers="headers" align="around" :style="{ color: 'blue' }">
      <template #0> align：around </template>
    </VSwitcher>
    <VSwitcher :headers="headers" align="center">
      <template #0> align：center </template>
    </VSwitcher>
    <VSwitcher :headers="headers" align="end">
      <template #0> align：end </template>
    </VSwitcher>
  </div>
</template>

<script>
import VSwitcher from '~/src/components/switcher'

export default {
  name: 'SwitcherAlign',
  components: {
    VSwitcher
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    headers() {
      return ['tab-0', 'tab-1333']
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
