<style lang="scss">
#datetime {
  padding-left: 15px;
  @include dark-elem(color, $--color-text);
  .title {
    margin: 0;
    padding: 35px 15px 15px 0;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
  }
}
</style>

<template>
  <div id="datetime">
    <p class="title">Date</p>
    <VDatetime v-model="date1" type="date"></VDatetime>
    <p class="title">Time</p>
    <VDatetime v-model="date2" type="time"></VDatetime>
    <p class="title">Datetime</p>
    <VDatetime v-model="date3" type="datetime" :min="min" :max="max"></VDatetime>
  </div>
</template>

<script>
import VDatetime from '~/src/components/datetime/datetime'

export default {
  name: 'Datetime',
  components: {
    VDatetime
  },
  data() {
    return {
      date1: '1574329092948',
      date2: '1994-08-03 08:08:00',
      date3: '',
      min: Date.now() - 86400 * 50000,
      max: Date.now() + 86400 * 50000
    }
  },
  head() {
    return {
      title: '时间选择器'
    }
  }
}
</script>
