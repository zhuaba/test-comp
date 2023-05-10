### Search 搜索框

<Phone page="search"/>

### Usage
```vue
<template>
  <VSearch v-model="value" />
</template>

<script>
import { VSearch } from '@bilibili/sakura'

export default {
  components: {
    VSearch
  },
  data() {
    return {
      value: ''  
    }
  }
}
</script>
```

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| value | String | - | Y | 双向绑定的 value |
| placeholder | String | 搜索词 | N | input 的 placeholder |
| attr | Object | {} | N | input 的其他 attr 属性 |
| fixed | Boolean | false | N | 是否吸顶 |
| close | Boolean | true | N | 输入框是否出现`X`号 |
| realtime | Boolean | false | N | 触发 change 事件（debounce 150ms） |
| stay-cancel | Boolean | false | N | 是否一直展示"取消"按钮 |
| show-border | Boolean | false | N | 是否显示下边框 |
| is-nav | Boolean | true | N | 是否为顶栏 |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| submit | - | 触发 submit 事件 |
| change | - | 触发 change 事件（仅当 realtime = true 时） |
| focus | - | input 聚焦 |
| blur | - | input 失焦 |
| cancel | - | 点击"取消"按钮 |
