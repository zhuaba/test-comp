### Collapse 折叠面板

<Phone page="collapse"/>

### Usage
```vue
<template>
  <VCollapse :count="2">
    <template slot="title-0">
      标题-1
    </template>
    <template slot="panel-0">
      wryyyyy
    </template>
    <template slot="title-1">
      标题-2
    </template>
    <template slot="panel-1">
      the world
    </template>
  </VCollapse>
</template>

<script>
import { VCollapse } from '@bilibli/sakura'

export default {
  components: {
    VCollapse
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| count | item 的个数（支持动态变更） | number | - | Y |
| active | 默认展开的 index | number、array | - | N |
| disabled | 禁止展开的 index | number、array | - | N |
| animate | 切换时是否有动画 | boolean | true | N |
| arrow | header 是否显示箭头 | boolean | true | N |
| only | 是否为手风琴模式 | boolean | false | N |

### Events
| 事件 | 参数 | 说明 |
| --- | --- | --- |
| open | index 选中分组的索引 | 打开分组 |
| close | index 选中分组的索引 | 关闭分组 |