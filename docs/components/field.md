### Field 输入框

<Phone page="field"/>

### Usage

```vue
<template>
  <VField
    v-model="value"
    before-line
    after-line
    :close="false"
    :error="error"
    :attr="{
      type: 'password',
      maxLength: 16,
      placeholder: '请输入密码'
    }"
  >
    <template slot="before">验证码</template>
    <template slot="after">尾巴</template>
  </VField>
</template>

<script>
import { VField } from '@bilibili/sakura'

export default {
  components: {
    VField
  },
  data() {
    return {
      value: '',
      error: 0
    }
  },
  watch: {
    value(val) {
      if (val.length > 6) {
        this.error++
      }
    }
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| v-model | input 的 value | string | - | Y |
| before-line | input 左侧的分割线 | boolean | false | N |
| after-line | input 右侧的分割线 | boolean | false | N |
| disabled | 禁用 input | boolean | false | N |
| close | 是否展示清除按钮 | boolean | true | N |
| error | error 的计数器 | number | 0 | N |
| attr | 输入框的 attr | object | { type: 'text', placeholder: '请输入' } | N |
| type | Input 原生 type 属性 | String | text | N |
| max-len | 最多输入字数限制 | Number | - | N |
| min-row | 输入框的最小行数 | Number | 1 | N |
| max-row | 输入框的最大行数 | Number | 1（设为 0 时为无限） | N |
| counter | 是否展示计数器（仅 textarea 时有效） | Boolean | false | N |
| align | 对其方式（start、end、center） | String | start | N |
| label | 相当于纯文本的 before 插槽 | String | - | N |

### Slots
| 插槽名 | scope | 介绍 |
| --- | --- | --- |
| before | - | input 左边的元素 |
| default | - | 替换 input 元素 |
| after | - | input 右边的元素 |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| focus | event | 获得焦点 |
| blur | event | 失去焦点  |
| change | newValue | 当用户输入时 |
