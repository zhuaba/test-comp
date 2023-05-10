### Lazy 懒加载容器

<Phone page="lazy"/>

### Usage
```javascript
import Vue from 'vue'
import { VLazy } from '@bilibili/sakura'

Vue.component(VLazy.name, VLazy)
```

```vue
<template>
  <VLazy never>
    <p>这里的内容直接渲染</p>  
  </VLazy>
  <VLazy>
    <p>这里的内容懒加载</p>  
  </VLazy>
  <VLazy event="click">
    <p>点击后加载</p>
  </VLazy>
</template>
```

### PS
- 该组件依赖 [v-lazyload](../components/lazyload.html) 这个指令

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| never | Boolean | false | N | 设为 true 则 SSR 时就直接渲染 |
| placeholder | String | v-lazy__placeholder | N | 占位元素的`class` | 
| event | String、Array | - | N | 触发加载的事件，如：click |
| transition | String | - | N | 为`slot`增加渐变动画，需在外侧自定义动画名 |

### Events
| 事件 | 说明 |
| --- | --- |
| show | 组件进入视口后触发 |

### Slot
| 插槽名 | 说明 |
| --- | --- |
| placeholder | 自定义占位元素 |
