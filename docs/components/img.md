### Img 图片

<Phone page="img"/>

### Usage
```vue
<template>
  <div class="img-wrap">
    <VImg src="" />
  </div>
</template>

<script>
import { VImg } from '@bilibili/sakura'

export default {
  components: {
    VImg
  }
}
</script>
```


### PS
- 该组件依赖 [v-lazyload](../components/lazyload.html) 这个指令
- 该组件的`width`和`height`只用于图片裁剪，不会去为图片设置尺寸，默认宽高都是100%
- 如果想要自定义裁剪函数，要这么做：
```javascript
import Vue from 'vue'

Vue.prototype.$resizeImage = (src, { width, height, rule, source, webp, dpr }) => {
  // 这里的 width，height，rule, source 是 v-img 的 props 值
  // 当 lazy 为 false 的 时候，dpr 是 2，其余时候是 0，需自己获取设备的 DPR
  return 'computed-src'
}
```

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| src | String | - | Y | 图片的链接 |
| alt | String | - | N | 图片的 alt |
| width | String, Number | - | N | 图片裁剪时的`width`参数 |
| height | String, Number | - | N | 图片裁剪时的`height`参数 |
| rule | String, Number | - | N | 图片裁剪时的`rule`参数 |
| lazy | Boolean | true | N | 是否懒加载 |
| source | Object | {} | N | 附加参数 |

### Events
| 事件 | 说明 |
| --- | --- |
| load | img onLoad 事件 |
| error | img onError 事件 |

