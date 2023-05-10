### Datetime 时间选择器

<Phone page="datetime"/>

```vue
<template>
  <VDatetime
    v-model="date"
    type="date"
  >
    <slot>
      <!--  默认是 span  -->
    </slot>
  </VDatetime>
</template>

<script>
import { VDatetime } from '@bilibili/sakura'

export default {
  components: {
    VDatetime
  },
  data() {
    return {
      date: ''
    }
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| v-model | 时间 | 时间或毫秒时间戳 | '' | Y |
| type | 选择器的类型 | string <br> [date、time、datetime] | date | N |
| max | 最大时间 | 时间或毫秒时间戳 | null | N |
| min | 最小时间 | 时间或毫秒时间戳 | null | N |
| placeholder | 占位文字 | string | 请选择时间 | N |
