### CheckBox 复选框

<Phone page="checkbox"/>

### Usage

```vue
<template>
  <div id="check-box">
    <p>boolean - normal</p>
    <VCheckBox v-model="selected1">自定义slot内容</VCheckBox>
    <p>boolean - small</p>
    <VCheckBox v-model="selected2" size="small">自定义slot内容</VCheckBox>
    <p>boolean - circle</p>
    <VCheckBox v-model="selected3" circle>自定义slot内容</VCheckBox>
    <p>boolean - circle - small</p>
    <VCheckBox v-model="selected4" circle size="small">自定义slot内容</VCheckBox>
    <p>boolean - disabled</p>
    <VCheckBox v-model="selected1" disabled>自定义slot内容</VCheckBox>
    <p>array - normal - max: 2</p>
    <VCheckBox :id="1" v-model="selected5" :max="2">自定义slot内容</VCheckBox>
    <VCheckBox :id="2" v-model="selected5" :max="2">自定义slot内容</VCheckBox>
    <VCheckBox id="5" v-model="selected5" :max="2">自定义slot内容</VCheckBox>
    <p>array - inline - disabled</p>
    <VCheckBox :id="1" v-model="selected6" inline>自定义slot内容</VCheckBox>
    <VCheckBox :id="2" v-model="selected6" disabled inline>自定义slot内容</VCheckBox>
    <VCheckBox id="5" v-model="selected6" inline>自定义slot内容</VCheckBox>
    <p>array - right</p>
    <VCheckBox :id="1" v-model="selected7" radio-position="right">自定义slot内容</VCheckBox>
    <VCheckBox :id="2" v-model="selected7" radio-position="right">自定义slot内容</VCheckBox>
    <VCheckBox id="5" v-model="selected7" radio-position="right">自定义slot内容</VCheckBox>
  </div>
</template>

<script>
import { VCheckBox } from '@bilibili/sakura'

export default {
  components: {
    VCheckBox
  },
  data() {
    return {
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: true,
      selected5: [1, '5'],
      selected6: [1, '5'],
      selected7: [1, 2, '5'],
    }
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| v-model | 双向绑定的值 | boolean、array | false | Y |
| id | 当 v-model 是 array 时，id 是匹配的值 | number, string | - | N |
| size | 组件的尺寸 | string（normal、small） | normal | N |
| max | 最多可选的个数（单选无效） | number | - | N |
| disabled | 全部处于禁止状态 | boolean | false | N |
| circle | 使用圆形按钮 | boolean | false | N |
| inline | 使用 inline 模式 | boolean | false | N |
| radio-position | 文本的位置 | left、right | left | N |
| confirm | 返回 true/false，当为 true 的时候才会改变值，参数是当前的值 | Function | null | N |

### Slot
| name | scope | 介绍 |
| --- | --- | --- |
| default | - | 文本的插槽 |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| change | 选中的值 | 当选中变化时触发 |
