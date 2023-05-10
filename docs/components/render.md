### Render 惰性列表

<Phone page="render"/>

### Usage
```vue
<template>
  <!-- item 高度固定  -->
  <VRender
    :total="1000"
    :remain="10"
    :height="200"
  >
    <item
      v-for="item in items"
      :key="item.id"
    />
  </VRender>
  <!-- item 不定高度，v-for -->
  <VRender
    :total="1000"
    :remain="10"
  >
    <item
      v-for="item in items"
      :key="item.id"
      :style="{ height: `${item.height}px` }"
    />
  </VRender>
  <!-- props 模式 -->
  <VRender
    :total="1000"
    :remain="10"
    :height="100"
    :item="item"
    :getter="getProps"
  />
</template>

<script>
import { VRender } from '@bilibili/sakura'

export default {
  components: {
    VRender
  },
  data() {
    return {
      items: []
    }
  },
  computed: {
    item () {
      return require('~/components/flow/item.vue')
    }
  },
  methods: {
    getProps(index) {
      return {
        props: {
          item: this.items[index],
          index
        }
      }
    }
  }
}
</script>
```


### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| ------ | ------ | ------ | ------ | --- |
| remain | 列表里保留的 item 的 DOM 个数 | Number | - | Y | 
| total | item 的总数 | Number | 0 | Y |
| column | 列表的列数，默认是1列，多列为瀑布流 | Number | 1 | N |
| height | 每个 item 的高度，如果为不定高度的组件，则不填 | Number | 0  | N |
| item | 如果 item 为单一固定高度的，则可以把 item 组件传过来 | VueComponent | - | N |
| getter | 如果传了 item 的组件，则 getter 方法用来获取 item 的属性，调用 getter 方法的传参是 index | Function | - | N |

> PS：建议 remain 设置为屏幕能容纳 item 数量的三倍
