### Swipe 轮播

<Phone page="swipe"/>

### Usage
```vue
<template>
  <VSwipe :length="3" @change="handleChange" @report="handleReport">
    <div slot="0" style="background-color: #6dc781">
      0
    </div>
    <div slot="1" style="background-color: #cc99cd">
      1
    </div>
    <div slot="2" style="background-color: #6a8bad">
      2
    </div>
  </VSwipe>
</template>

<script>
import { VSwipe } from '@bilibili/sakura'

export default {
  components: {
    VSwipe
  },
  methods: {
    handleChange(index) {
      console.log('handleChange', index)
    },
    handleReport(index) {
      console.log('handleReport', index)
    }
  }
}
</script>
```

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| length | Number | - | Y | 轮播的个数 |
| duration | Number | 500 | N | 切换动画的时长，ms |
| autoplay | Number | 2000 | N | 轮播间隔的时长，ms，当设为 0 时不自动播放 |
| loop | Boolean | true | N | 是否循环播放 |
| indicator | Boolean | true | N | 是否展示指示器 |
| index | Number | 0 | N | 默认选中的 index |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| change | index | 当前页面的 index |
| report | index | 轮播首次曝光时触发 |

### Methods
| 方法名 | 参数类型 | 返回值 | 介绍 |
| --- | --- | --- | --- |
| reClone | - | - | 重新`clone`前后两个元素 |
| jump | number | - | 跳转到第几页（从0开始） |
