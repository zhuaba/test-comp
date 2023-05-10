<style lang="scss">
#range {
  padding: 20px;

  .v-range {
    margin-top: 30px;
  }
}
</style>

<template>
  <div id="range">
    <VRange v-model="value_1" />
    <VRange v-model="value_2" vertical />
  </div>
</template>

<script>
import VRange from '~/src/components/range/range'

export default {
  name: 'Range',
  components: {
    VRange
  },
  props: {},
  data() {
    return {
      value_1: 50,
      value_2: 50
    }
  },
  head() {
    return {
      title: '滑块'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
}
</script>
