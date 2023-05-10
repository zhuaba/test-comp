### Dialog 对话框

<Phone page="dialog" />

### Usage

```vue
<template>
  <VDialog
    v-model="open"
    :mask="true"
    :mask-close="true"
    transition="ios"
    width="280px"
    height="300px"
  >
    <p>内容直接写在这里</p>
    <template slot="outer">
      <button>关闭</button>
    </template>
  </VDialog>
</template>

<script>
import { VDialog } from '@bilibili/sakura'

export default {
  components: {
    VDialog
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
| mask | 是否展示遮罩 | boolean | true | N |
| lock | 是否阻止屏幕滚动 | boolean | true | N |
| maskClose | 点击遮罩是否关闭 | boolean | true | N |
| transition | 对话框的动画 | string <br> [ios、md、popup、scale] | - | N |
| width | 对话框的宽度 | String | 280px | N |
| height | 对话框的高度 | String | 300px | N |
| background | 一个色值或一个图片地址 | String | - | N |
| radius | 弹窗的圆角尺寸 | String | 5px | N |
| padding | 弹窗的 padding | String | - | N |

### Events
| 事件 | 说明 |
| --- | --- |
| opened | 抽屉完全展开 |
| closed | 抽屉完全关闭 |

### Methods
| 方法名 | 参数 | 介绍 |
| --- | --- | --- |
| open | - | 打开事件 |
| close | - | 关闭事件 |


### Slots
| 插槽名 | scope | 介绍 |
| --- | --- | --- |
| header | - | 顶部固定的元素 |
| footer | - | 底部固定的元素 |
| outer | - | 面板外部的元素 |
