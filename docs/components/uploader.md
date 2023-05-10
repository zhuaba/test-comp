### Uploader 文件上传

<Phone page="uploader"/>

### Usage
```vue
<template>
  <div>
    <VUploader v-model="value" bucket="qa" />
  </div>
</template>

<script>
import { VUploader } from '@bilibili/sakura'

export default {
  components: {
    VUploader
  },
  data() {
    return {
      value: []
    }
  }
}
</script>
```

### PS

> v-model 在组件内部的变化会 emit 出来，但是在组件外修改 v-mode 不会传递到组件内，并不是真正的双向绑定

### Props

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| v-model | 一个响应式的数据源 | Array, Object, String | - | N |
| url | 图片上传的地址 | String | //api.bilibili.com/x/upload/web/image | N |
| bucket | 图床的 bucket | String | - | N |
| disabled | 是否禁止 input 触发 | Boolean | false | N |
| accept | input 的原生 accept 属性 | String，Array | image/* | N |
| limit | 限制图片上传的最大个数 | Number | 1 | N |
| oversize | 限制图片上传的最大尺寸 | Number | 0 | N |
| cookie | 是否发送 cookie | Boolean | true | N |
| auto | 是否自动上传 | Boolean | true | N |
| required | 是否至少保留一张图片 | Boolean | false | N |
| http | 是否使用自定义请求 | Function | xhr-post | N |
| transformRequest | 给发送的 formData 添加额外参数 | Function | function | N |
| transformResponse | 格式化服务端返回的数据 | Function | function，返回一个 object，当图片上传成功时 key 要包含`url` | N |

### Methods
| 方法名 | 参数 | 介绍 |
| --- | --- | --- |
| upload | - | 当 auto 为 false 的时候，调用该方法上传图片 |
| images | - | 当 v-model 不传时，调用该方法拿到所有已上传的图片 |
| remove | index | 调用该方法去删除图片列表中不想要的图片 |
| set | value | 当需要更新组件外 v-model 时调用 |

### Events
| 事件名 | 参数 | 介绍 |
| --- | --- | --- |
| click | - | 当点击上传区域时触发 |
| change | - | 当图片上传成功、失败、删除时触发 |


### Slots
| 插槽名 | scope | 介绍 |
| --- | --- | --- |
| action | - | 可用于自定义 input 区域 |
| display | - | 可用于自定义预览区域 |
| list | :list | 可用于自定义图片列表 |
