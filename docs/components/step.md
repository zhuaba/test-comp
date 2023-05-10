### Step 步骤条

<Phone page="step"/>

### Usage
```vue
<template>
  <p>水平</p>
  <VStep :list="['确认账号', '明确条款', '注销原因']" :current="1" />
  <p>水平，反向</p>
  <VStep :list="['确认账号', '明确条款', '注销原因']" :current="1" desc />
  <p>竖直</p>
  <VStep :list="['确认账号', '明确条款', '注销原因']" :current="1" vertical />
  <p>竖直，反向</p>
  <VStep :list="['确认账号', '明确条款', '注销原因']" :current="1" vertical desc />
</template>

<script>
import { VStep } from '@bilibili/sakura'

export default {
  components: {
    VStep
  }
}
</script>
```

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| list | Array\<String\> | - | Y | 步骤列表 |
| current | Number | 0 | N | 当前所处的是第几步（从0开始计数） |
| vertical | Boolean | false | N | 是否竖直 |
| desc | Boolean | false | N | 是否倒序 |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| click | index | 点击每个 step 时会触发点击事件 |

### Slots
| 插槽名 | scope | 介绍 |
| --- | --- | --- |
| icon-${index} | - | 自定义 icon 时可用 |
| text-${index} | - | 自定义文本区域时可用 |

