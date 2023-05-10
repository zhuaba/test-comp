### NoticeBar 通知栏

<Phone page="noticebar"/>

### Usage

```vue
<template>
  <div id="notice-bar">
    <p class="title">基础用法</p>
    <VNoticebar :text="noticeText1"></VNoticebar>
    <p class="title">横向多组滚动</p>
    <VNoticebar :text="noticeText4"></VNoticebar>
    <p class="title">静态单行溢出省略</p>
    <VNoticebar :scrollable="false" :text="noticeText1"></VNoticebar>
    <p class="title">静态多行展示</p>
    <VNoticebar :scrollable="false" :wrapable="true" :text="noticeText1"></VNoticebar>
    <p class="title">垂直滚动</p>
    <VNoticebar speed="20" :vertical-scroll="true" :wrapable="true">{{ noticeText2 }}</VNoticebar>
    <p class="title">垂直多组滚动</p>
    <VNoticebar
      :text="noticeText3"
      :vertical-scroll="true"
      :vertical-scroll-interval="3000"
      @replay="handleReplay"
    ></VNoticebar>
  </div>
</template>

<script>
import { VNoticebar } from '@bilibili/sakura'

export default {
  name: 'Notice',
  components: {
    VNoticebar,
  },
  data() {
    return {
      noticeText1: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
      noticeText2:
        '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
      noticeText3: ['1', '2', '3'],
      noticeText4: [
        '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
        '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
      ],
    }
  },
  methods: {
    handleReplay() {
      // do.
    },
  },
  head() {
    return {
      title: '通知栏',
    }
  },
}
</script>

```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| text | 内容文案 | string, string[] | - | Y |
| color | 文字颜色 | string | #fa8e57 | N |
| background | 背景颜色 | string | #fff7f0 | N |
| scrollable | 是否可滚动 | boolean | true | N |
| verticalScroll | 是否是垂直滚动 | boolean | false | N |
| wrapable | 是否折行显示 | boolean | false | N |
| delay | 滚动开始前的延迟时间 | string, number | 1 | N |
| speed | 滚动速度 | string, number | 50 | N |
| verticalScrollInterval | 垂直多组段落滚动的间隔 | string, Number | 0 | N |

### Events

| 事件 | 说明 |
| --- | --- |
| replay | 重新从头滚动 |
