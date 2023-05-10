### Button 按钮

<Phone page="button"/>

### Usage
```vue
<template>
  <VButton>普通按钮</VButton>
  <VButton :loading="booleanLoading">loading按钮</VButton>
  <VButton :disabled="booleanDisabled">禁用按钮</VButton>
  <VButton plain>镂空按钮</VButton>
</template>

<script>
import { VButton } from '@bilibili/sakura'

export default {
  components: {
    VButton
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 | 可选值 |
| --- | --- | --- | --- | --- | --- |
| text | 纯文本样式按钮 | boolean | false | N | - |
| block | 让按钮变成块级元素 | boolean | false | N | - |
| plain | 让按钮变成镂空的 | boolean | false | N | - |
| disabled | 让按钮不可点击 | boolean | false | N | - |
| loading | 让按钮开始转圈 | boolean | false | N | - |
| round | 让按钮变成圆角 | boolean | false | N | - |
| size | 按钮的尺寸 | string | medium | N | 'small', 'medium', 'large' |
| theme | 让按钮变成镂空的 | boolean | primary | N | 'primary', 'success', 'info', 'warning', 'danger' |
| delay | 让 loading 延迟展示 | number | 0 | N | >= 0 |


### Events

| 事件 | 说明 |
| --- | --- |
| click | 点击事件 |
