### Toggle 开关

<Phone page="toggle"/>

### Usage
```vue
<template>
  <VToggle
    v-model="value"
    :loading="false"
    :disabled="false"
    :confirm="confirm"
  />
</template>

<script>
import { VToggle } from '@bilibili/sakura'

export default {
  components: {
    VToggle
  },
  data() {
    return {
      value: false
    }
  },
  methods: {
    confirm() {
      if (!this.value) {
        return
      }
      return new Promise((resolve, reject) => {
        this.$alert({
          title: '提示',
          message: '确定要修改状态吗？',
          buttons: ['取消', '确定'],
          callback: (index) => {
            index ? resolve() : reject()
          }
        })
      })
    }
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| v-model | input 的 value | boolean | - | Y |
| loading | 是否处于 loading 状态 | boolean | false | N |
| disabled | 是否处于 disabled 状态 | boolean | false | N |
| confirm | 点击之后的确认弹窗 | function | undefined | N |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| change | 变化的结果 | toggle 状态变化时触发 |
