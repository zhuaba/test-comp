<style lang="scss">
#check-box {
  padding: 20px;
  @include dark-elem(color, $--color-text);
  p {
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
</style>

<template>
  <div id="check-box">
    <p>boolean - normal</p>
    <VCheckBox v-model="selected1">自定义slot内容</VCheckBox>
    <p>boolean - small</p>
    <VCheckBox v-model="selected2" size="small">自定义slot内容</VCheckBox>
    <p>boolean - circle</p>
    <VCheckBox v-model="selected3" circle>自定义slot内容</VCheckBox>
    <p>boolean - circle - small</p>
    <VCheckBox v-model="selected4" circle size="small">自定义slot内容</VCheckBox>
    <p>boolean - disabled</p>
    <VCheckBox v-model="selected1" disabled>自定义slot内容</VCheckBox>
    <p>array - normal - max: 2</p>
    <VCheckBox :id="1" v-model="selected5" :max="2">自定义slot内容</VCheckBox>
    <VCheckBox :id="2" v-model="selected5" :max="2">自定义slot内容</VCheckBox>
    <VCheckBox id="5" v-model="selected5" :max="2">自定义slot内容</VCheckBox>
    <p>array - inline - disabled</p>
    <VCheckBox :id="1" v-model="selected6" inline>自定义slot内容</VCheckBox>
    <VCheckBox :id="2" v-model="selected6" disabled inline>自定义slot内容</VCheckBox>
    <VCheckBox id="5" v-model="selected6" inline>自定义slot内容</VCheckBox>
    <p>array - right</p>
    <VCheckBox :id="1" v-model="selected7" radio-position="right">自定义slot内容</VCheckBox>
    <VCheckBox :id="2" v-model="selected7" radio-position="right">自定义slot内容</VCheckBox>
    <VCheckBox id="5" v-model="selected7" radio-position="right">自定义slot内容</VCheckBox>
  </div>
</template>

<script>
import VCheckBox from '~/src/components/check-box'

export default {
  name: 'CheckBox',
  components: {
    VCheckBox
  },
  props: {},
  data() {
    return {
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: true,
      selected5: [1, '5'],
      selected6: [1, '5'],
      selected7: [1, 2, '5']
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
