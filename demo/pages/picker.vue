<style lang="scss"></style>

<template>
  <div id="picker">
    <div>
      <button @click="singleVisible = !singleVisible">列表选择器：{{ singleValue }}</button>
      <VPicker v-model="singleValue" :list="singleList" :show.sync="singleVisible">
        <template #header>
          <span>自定义头部</span>
        </template>
      </VPicker>
    </div>
    <div>
      <button @click="areaVisible = !areaVisible">地区选择器：{{ areaValue }}</button>
      <VPicker v-model="areaValue" label-name="text" value-name="text" :list="areaList" :show.sync="areaVisible">
        <template #title>
          <span>自定义标题</span>
        </template>
      </VPicker>
    </div>
    <div>
      <button @click="addressVisible = !addressVisible">地区选择器2：{{ addressValue }}</button>
      <VPicker
        v-model="addressValue"
        label-name="addressName"
        value-name="addressName"
        :list="addressList"
        :show.sync="addressVisible"
      >
        <template #title>
          <span>自定义标题</span>
        </template>
      </VPicker>
    </div>
    <div>
      <button @click="dateVisible = !dateVisible">日期选择器：{{ dateValue }}</button>
      <VPicker v-model="dateValue" :list="dateList" :show.sync="dateVisible" />
    </div>
  </div>
</template>

<script>
import area from '../utils/area'
import address from '../utils/address'
import VPicker from '~/src/components/picker/picker'

export default {
  name: 'Picker',
  components: {
    VPicker
  },
  data() {
    return {
      areaVisible: false,
      addressVisible: false,
      areaValue: ['', ''],
      addressValue: ['', ''],
      singleVisible: false,
      singleValue: '',
      dateVisible: false,
      dateValue: [1999, 9]
    }
  },
  head() {
    return {
      title: '选择器'
    }
  },
  computed: {
    areaList() {
      return area
    },
    addressList() {
      return address
    },
    singleList() {
      return [
        {
          value: '10',
          text: '珠海'
        },
        {
          value: '69',
          text: '深圳'
        },
        {
          value: '131',
          text: '广州'
        },
        {
          value: '545',
          text: '东莞',
          disabled: true
        },
        {
          value: '546',
          text: '佛山'
        },
        {
          value: '910',
          text: '沈阳'
        },
        {
          value: '1107',
          text: '铁岭'
        },
        {
          value: '1108',
          text: '抚顺'
        },
        {
          value: '1109',
          text: '盘锦'
        },
        {
          value: '1110',
          text: '葫芦岛'
        },
        {
          value: '1111',
          text: '锦州'
        },
        {
          value: '1112',
          text: '朝阳'
        },
        {
          value: '1113',
          text: '阜新'
        }
      ]
    },
    dateList() {
      return [
        [
          {
            text: 1999,
            value: 1999
          },
          {
            text: 2000,
            value: 2000
          },
          {
            text: 2001,
            value: 2001
          },
          {
            text: 2002,
            value: 2002
          },
          {
            text: 2003,
            value: 2003
          },
          {
            text: 2004,
            value: 2004
          },
          {
            text: 2005,
            value: 2005
          },
          {
            text: 2006,
            value: 2006
          },
          {
            text: 2007,
            value: 2007
          },
          {
            text: 2008,
            value: 2008
          }
        ],
        [
          {
            text: 1,
            value: 1
          },
          {
            text: 2,
            value: 2
          },
          {
            text: 3,
            value: 3
          },
          {
            text: 4,
            value: 4
          },
          {
            text: 5,
            value: 5
          },
          {
            text: 6,
            value: 6
          },
          {
            text: 7,
            value: 7
          },
          {
            text: 8,
            value: 8
          },
          {
            text: 9,
            value: 9
          },
          {
            text: 10,
            value: 10
          },
          {
            text: 11,
            value: 11
          },
          {
            text: 12,
            value: 12
          }
        ]
      ]
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
