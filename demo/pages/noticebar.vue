<style lang="scss">
#notice-bar {
  background-color: #f6f6f6;
  min-height: 100vh;
  padding-bottom: 10vh;

  .title {
    margin: 0;
    padding: 35px 15px 15px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
  }
}
</style>

<template>
  <div id="notice-bar">
    <p class="title">基础用法</p>
    <VNoticeBar :text="noticeText1"></VNoticeBar>
    <p class="title">横向多组滚动</p>
    <VNoticeBar background="#fff" color="#000" :text="noticeText4"></VNoticeBar>
    <p class="title">静态单行溢出省略</p>
    <VNoticeBar :scrollable="false" :text="noticeText1"></VNoticeBar>
    <p class="title">静态多行展示</p>
    <VNoticeBar :scrollable="false" :wrapable="true" :text="noticeText1"></VNoticeBar>
    <p class="title">垂直滚动</p>
    <VNoticeBar speed="20" :vertical-scroll="true" :wrapable="true">{{ noticeText2 }}</VNoticeBar>
    <p class="title">垂直多组滚动</p>
    <VNoticeBar
      :text="noticeText3"
      :vertical-scroll="true"
      :vertical-scroll-interval="3000"
      @replay="handleReplay"
    ></VNoticeBar>
  </div>
</template>

<script>
import VNoticeBar from '~/src/components/noticebar/noticebar'

export default {
  name: 'Notice',
  components: {
    VNoticeBar
  },
  data() {
    return {
      noticeText1: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
      noticeText2:
        '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
      noticeText3: ['1', '2', '3'],
      noticeText4: [
        '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
        '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
      ]
    }
  },
  head() {
    return {
      title: '通知栏'
    }
  },
  methods: {
    handleReplay() {
      // do.
    }
  }
}
</script>
