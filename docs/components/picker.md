### Picker 选择器

<Phone page="picker"/>

### Usage

```vue
<template>
  <VPicker v-model="value" :list="list" :show.sync="visible">
    <template #title>
      <span>自定义标题</span>
    </template>
  </VPicker>
</template>

<script>
import { VPicker } from '@bilibili/sakura'

export default {
  components: {
    VPicker  
  },
  data() {
    return {
      visible: false,
      value: ['id-1', 'id-2'],
      list: [
        {
          'value': '11',
          'text': '北京'
        },
        {
          'value': '26',
          'text': '吉林',
          'children': [
            {
              'value': '27',
              'text': '长春',
              'disabled': true
            },
            {
              'value': '28',
              'text': '吉林市'
            }
          ]
        }
      ]
    }   
  }
}
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| v-model | 双向绑定的值 | String、Number、Array | - | Y |
| list | 展示的列表 | Array\<Object\>、Array\<Array\> | - | Y |
| show.sync | 打开或关闭 picker | Boolean | false | Y |
| size | 抽屉的高度 | String | 60% | N | 
| labelName | 展示的字段 | string | text | N |
| valueName | 选中的字段 | string | value | N |
| childName | 子节点的字段 | string | children | N |
| maskClose | 点击遮罩是否关闭 | boolean | true | N |
| cancelText | 左侧按钮的文案 | String | 确认 | N |
| submitText | 右侧按钮的文案 | String | 确认 | N |

### Slots
| 插槽名 | scope | 介绍 |
| --- | --- | --- |
| header | - | 抽屉的头部 |
| title | - | 抽屉的文字标题 |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| cancel | - | 点击`取消`按钮 |
| submit | - | 点击`确认`按钮 |


