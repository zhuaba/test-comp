### Affix 图钉

### Usage
```vue
<template>
  <VAffix :fixed-top="0">
    这里的内容会 fixed
  </VAffix>
</template>

<script>
import { VAffix } from '@bilibili/sakura'

export default {
  components: {
    VAffix
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 | 可选值 |
| --- | --- | --- | --- | --- | --- |
| fixed-top | 距离顶部的距离（px） | number | - | Y | - |
| disabled | 禁用 fixed | boolean | false | N | - |
