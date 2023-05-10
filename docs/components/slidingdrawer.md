### SlidingDrawer 滑动抽屉

<Phone page="slidingdrawer"/>

### Usage

```vue
<template>
  <VSlidingDrawer
    v-model="open"
    height="60%"
  >
    <div>233</div>
  </VSlidingDrawer>
</template>

<script>
import { VSlidingDrawer } from '@bilibili/sakura'

export default {
  components: {
    VSlidingDrawer
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
```


### Props
| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| v-model | 打开或关闭 | boolean | false | Y |
| height | 弹窗的尺寸 | string （px 或 %） | 60% | N |
| mask | 是否展示遮罩 | boolean | true | N |
| lock | 是否禁止屏幕滚动 | boolean | true | N |

### Slots
| 插槽名 | scope | 介绍 |
| --- | --- | --- |
| header | - | 顶部固定的元素 |
| footer | - | 底部固定的元素 |

### Events
| 事件 | 说明 |
| --- | --- |
| opened | 抽屉完全展开 |
| closed | 抽屉完全关闭 |
