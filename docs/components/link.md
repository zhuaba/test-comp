### Link 链接

<Phone page="link"/>

### 左为`router-link`，右为`v-link`

<img src="https://user-images.githubusercontent.com/904724/51692960-4158be80-1ffe-11e9-9299-61881d06412e.gif">

### Usage
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import VLink from '@bilibili/sakura/lib/v-link'

Vue.use(Router)
Vue.component(VLink.name, VLink)
```

```vue
<template>
  <VLink to="...">链接</VLink>
</template>
```

### PS
- 该组件依赖`vue-router`，所以在绑定该组件之前，需要先绑定`vue-router`
- 原理：[quicklink](https://github.com/GoogleChromeLabs/quicklink)
- 源码：[nuxt-link](https://github.com/nuxt/nuxt.js/blob/9f921fe136a90dce08670812f2b3b29a70e31b92/packages/vue-app/template/components/nuxt-link.client.js)

### Props
| name | type | default  | required | description |
| --- | --- | --- | --- | --- |
| prefetch | Boolean | true | N | 默认进行预加载，设为 false 则关闭预加载 |
| no-prefetch | Boolean | false | N | 设为 true 则关闭预加载 |
