<style lang="scss">
#swipe {
  .v-swipe {
    .swipe-item {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>

<template>
  <div id="swipe">
    <VSwipe :length="list.length" @change="handleChange" @report="handleReport">
      <div
        v-for="(item, index) in list"
        :key="index"
        :slot="index"
        class="swipe-item"
        :style="{ backgroundImage: `url(${item.pic})` }"
      />
    </VSwipe>
  </div>
</template>

<script>
import VSwipe from '~/src/components/swipe/swipe'

export default {
  name: 'Swipe',
  components: {
    VSwipe
  },
  data() {
    return {
      list: [
        {
          id: 459568,
          contract_id: '',
          pos_num: 1,
          name: '睡着了吗？祈祷nia！',
          pic: 'http://n.sinaimg.cn/sinacn16/200/w640h360/20180908/1e75-hivtsyk0647532.jpg',
          litpic: '',
          url: 'https://www.bilibili.com/read/cv4940517',
          style: 0,
          agency: '',
          label: '',
          intro: '',
          creative_type: 0,
          request_id: '1583313109',
          src_id: 1696,
          area: 1,
          is_ad_loc: false,
          ad_cb: '',
          title: '',
          server_type: 0,
          cm_mark: 0,
          stime: 1583290800,
          mid: '2653718',
          activity_type: 0,
          epid: 0,
          season: null,
          room: null
        },
        {
          id: 458955,
          contract_id: '',
          pos_num: 2,
          name: '有猫有美食的一人生活，太美了',
          pic: 'http://5b0988e595225.cdn.sohucs.com/images/20171116/d303cdcf5dc948b58795b8d5ae2f3335.jpeg',
          litpic: '',
          url: 'https://www.bilibili.com/bangumi/play/ss32634',
          style: 0,
          agency: '',
          label: '',
          intro: '',
          creative_type: 0,
          request_id: '1583313109',
          src_id: 1697,
          area: 1,
          is_ad_loc: false,
          ad_cb: '',
          title: '',
          server_type: 0,
          cm_mark: 0,
          stime: 1583290800,
          mid: '2653718',
          activity_type: 0,
          epid: 0,
          season: null,
          room: null
        },
        {
          id: 459294,
          contract_id: '',
          pos_num: 3,
          name: '期待大神还原《我的三体》场景',
          pic: 'http://n.sinaimg.cn/sinacn16/272/w688h384/20180627/1b0a-hencxtv2727930.jpg',
          litpic: '',
          url: 'https://www.bilibili.com/blackboard/dynamic/321',
          style: 0,
          agency: '',
          label: '',
          intro: '',
          creative_type: 0,
          request_id: '1583313109',
          src_id: 1698,
          area: 1,
          is_ad_loc: false,
          ad_cb: '',
          title: '',
          server_type: 0,
          cm_mark: 0,
          stime: 1583290800,
          mid: '2653718',
          activity_type: 0,
          epid: 0,
          season: null,
          room: null
        }
      ]
    }
  },
  head() {
    return {
      title: '轮播'
    }
  },
  methods: {
    handleChange(index) {},
    handleReport(index) {}
  }
}
</script>
