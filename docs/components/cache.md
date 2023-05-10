### Cache 本地存储

### Import

```javascript
import Vue from 'vue'
import { VCache } from '@bilibili/sakura'

Vue.prototype.$cache = VCache
```

### Methods

| 方法名 | 参数类型 | 返回值 | 介绍 |
| --- | --- | --- | --- |
| set | (key, value, timeout) | - | timeout 为可选参数，单位为秒 |
| get | (key, default) | value 或 default | default 默认为 null |
| del | (key) | - | 删除某个值 |
| has | (key) | boolean | 查看某个值是否存在 |

> PS：该功能依赖 localStorage，通过 JSON.stringify 存储，然后再通过 JSON.parse 取出
