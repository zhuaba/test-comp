### Switcher 切换容器

<Phone page="switcher"/>

### Usage
```vue
<template>
  <VSwitcher :headers="['tab-1', 'tab-2', 'tab-3']">
    <template #0>
      0
    </template>
    <template #1>
      1      
    </template>
    <template #2>
      2    
    </template>
  </VSwitcher>
</template>

<script>
import { VSwitcher } from '@bilibili/sakura'

export default {
  components: {
    VSwitcher
  }
}
</script>
```

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| headers | Array | [] | Y | tab-header 的数组，支持 icon,支持disable(默认false) |
| default-index | Number | 0 | N | 默认选中的 tab index |
| route-name | String | - | N | 如果要使用路由模式，则传入 router-link 或 nuxt-link |
| align | String | start | N | tab 的展示模式 ['around', 'start', 'center', 'end', 'vertical'] |
| duration | Number | 300 | N | 切换动画的时长，ms |
| swipe | Boolean | true | N | 是否支持手势滑动 | 
| sticky | Boolean | true | N | 是否是手指跟随滑动 | 
| fluid | Boolean | false | N | 当设为 true 时，组件的高度会自适应内容 | 
| fixed-top | Number | undefined | N | 如果设值，就为 headers fixed 时距离顶部的高度 |
| lazy-mode | String | none | N | none 就会初始化所有页面，single 只会初始化当前页面，siblings 只会初始化当前和相邻页面 |
| hidden-header | Boolean | false | N | 是否隐藏 header |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| change | index | 当前页面的 index |
| fixed | result | 是否吸顶 |

### Slots
| 插槽名 | scope | 介绍 |
| --- | --- | --- |
| header-before | - | header 前面的元素 |
| header-after | - | header 后面的元素 |
| header-bottom | - | header 下面的固定元素 |

### Methods
| 方法名 | 参数 | 介绍 |
| --- | --- | --- |
| slide | index | 切换 content |
| calcHeader | - | 当 tabs 的内容是动态的时候，当数据变化时调用这个函数 |
