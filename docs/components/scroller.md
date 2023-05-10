### Scroller 滚动容器

<Phone page="scroller"/>

### Usage

```vue
<template>
  <VScroller
    :preload="50"
    :preload-top="0"
    :preload-bottom="0"
    @top="handleScrollTop"
    @bottom="handleLoadMore"
    @refresh="handleRefresh"
    @infinite="handleLoadMore"
  >
    <ul>
      <li>...</li>    
    </ul>
  </VScroller>
</template>

<script>
import { VScroller } from '@bilibili/sakura'

export default {
  components: {
    VScroller
  },
  methods: {
    handleScrollTop() {
      // page at top，do something
    },
    handleLoadMore() {
      // page at bottom，load more
    },
    handleRefresh({ offset, event }) {
      // refresh offset，touch-start & touch-move
    },
    handleRefreshEnd() {
      // refresh end，touch-end
    },
    handleScroll({ offsetTop, isUp }) {
      // page on scroll, offsetTop<number>, isUp<boolean>
    }
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| is-scroll-x | 判断是横向滚动还是纵向滚动 | boolean | false | N |
| preload | 触发 bottom，top 的距离，优先级低 | number | 50 | N |
| preload-top | 触发 top 的距离（px） | number | 0 | N |
| preload-bottom | 触发 bottom 的距离（px） | number | 0 | N |
| use-refresh | 是否开启下拉刷新 | boolean | N | N |
| use-infinite | 是否开启上拉刷新 | boolean | N | N |
| scroll-throttle | 是否监听 scroll 事件，并设置 throttle | Number | -1 | N |
| fixed-scroll | 解决 iOS13 以前的滚动锁屏问题 | boolean | true | N |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| top | - | 页面滚动到了顶部 |
| bottom | - | 页面滚动到了底部  |
| refresh | - | 触发下拉刷新 |
| infinite | - | 触发上拉刷新 |
| scroll | <offsetTop, isUp> | 触发了滚动事件 |
| pull-down-start | - | 开始下拉 |
| pull-up-start | - | 开始上拉 |
| pull-down-end | - | 结束下拉 |
| pull-up-end | - | 结束上拉 |

### Methods
| 方法名 | 参数 | 介绍 |
| --- | --- | --- |
| scrollY | offset（0）, duration（2000ms） | 滚动容器到指定的高度 |
| close | - | 上、下拉刷新函数执行完后手动调用一次 |
| openFix | - | 开启 iOS 滚动锁屏的修复 |
| closeFix | - | 关闭 iOS 滚动锁屏的修复 |
| lock | - | 禁止上拉和下拉 |
| unlock | - | 放开上拉和下拉 |

### Slots
| 名称 | 参数 | 介绍 |
| --- | --- | --- |
| refresh | - | 自定义下拉刷新 |
| infinite | - | 自定义上拉加载更多 |
