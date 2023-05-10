### Drawer 抽屉

<Phone page="drawer"/>

### Usage

```vue
<template>
  <VDrawer
    v-model="open"
    :count="2"
    :strict="true"
    from="bottom"
    size="60%"
    cancel="取消"
  >
    <div slot="0">233</div>
    <div slot="1">666</div>
  </VDrawer>
</template>

<script>
import { VDrawer } from '@bilibili/sakura'

export default {
  components: {
    VDrawer
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
| from | 弹窗出现的方向 | string <br> [top、bottom、left、right] | 'bottom' | N |
| mask | 是否展示遮罩 | boolean | true | N |
| size | 弹窗的尺寸 | string （px 或 %） | 60% | N |
| strict | 开启 ActionSheet 模式 | boolean | false | N |
| count | ActionSheet 模式下有几个选项 | number | 0 | N |
| cancel | ActionSheet 模式下取消按钮文本 | string | - | N |
| lock | 是否禁止屏幕滚动 | boolean | true | N |
| dropdown | 是否使用 dropdown 模式 | boolean | false | N |
| offset | 当组件处于[复杂环境](https://www.imooc.com/article/67784)中时，手动指定 dropdown 的偏移量 | Number | -1 | N |
| maskClose | 点击遮罩是否关闭 | boolean | true | N |

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
