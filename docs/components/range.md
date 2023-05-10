### Range 滑块

<Phone page="range"/>

### Usage
```vue
<template>
  <VRange v-model="value" />
</template>

<script>
import { VRange } from '@bilibili/sakura'

export default {
  components: {
    VRange
  },
  data() {
    return {
      value: 0  
    }
  }
}
</script>
```

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| value | Number | - | Y | 双向绑定的 value |
| max | Number | 100 | N | 最大值 |
| min | Number | 0 | N | 最小值 |
| step | Number | 1 | N | 步长 |
| disabled | Boolean | false | N | 禁用状态 |
| vertical | Boolean | false | N | 竖直 |
| tip | Boolean | true | N | 显示数值提示 |
