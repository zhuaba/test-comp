### Form 表单

### Usage
```vue
<template>
  <VForm :form="form" :rule="rule" :loading="loading" @submit="handleSubmit">
    这里是表单...
    <button slot="submit"></button>
  </VForm>
</template>

<script>
import { VForm } from '@bilibili/sakura'

export default {
  components: {
    VForm
  },
  data() {
    return {
      form: {},
      rule: {}
    }    
  },
  methods: {
    handleSubmit() {}   
  }
}
</script>
```

### PS

> rule 的写法：[async-validator](https://github.com/yiminghe/async-validator)

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| form | Object | null | N | 表单对象 |
| rule | Object | null | N | 表单验证规则 |
| loading | Boolean | false | N | 是否正在提交 |
| full | Boolean | false | N | 是否整个页面都是表单 |
| error | Boolean | true | N | 是否自动展示报错信息 |

### Events
| 事件 | 说明 |
| --- | --- |
| submit | 触发了 submit 事件 |
| error({ errors, fields }) | 触发了 error 事件 |

### Slots
| 插槽名 | scope | 介绍 |
| --- | --- | --- |
| default | - | 表单内容 |
| submit | - | submit 按钮，默认是一个按钮 |
