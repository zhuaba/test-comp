### Scrolly 滚动


### Usage
```javascript
import Vue from 'vue'
import { VScrolly } from '@bilibili/sakura'

Vue.prototype.$scrollY = VScrolly

this.$scrollY(0, {})
```

### Params

| 参数 | 类型 | 默认值 | 必填 | 介绍 |
| --- | --- | --- | --- | --- |
| targetY | Number | 0  | N | 滚动到指定的 Y 轴 |
| { dom, time } | Object | { dom: window, time: 400 } | N |  - |
