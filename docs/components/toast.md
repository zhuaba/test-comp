### Toast 提示

<Phone page="toast"/>

### Import

```javascript
import Vue from 'vue'
import { VToast } from '@bilibili/sakura'

Vue.prototype.$toast = VToast({
  duration: '<Number>：toast 持续的时间（loading 是一直持续），默认 1500（ms）',
  timeout: '<Number>：then 调用的间隔时间（loading 没有 then），默认 1500（ms）'
})
```


### Usage

```javascript
export default {
  methods: {
    showToast() {
      this.$toast.info('info')
    },
    onSuccess() {
      this.$toast.success('it works!')
        .then(() => {
          // do something
        })
    },
    onError() {
      this.$toast.error('ops!')
    },
    onLoading() {
      this.$toast.loading('waiting...')
    },
    onHidden() {
      this.$toast.stop()
    }
  }
}
```


### Methods

| 方法名 | 参数类型 | 返回值 | 介绍 |
| --- | --- | --- | --- |
| info | string | promise | 普通的 toast |
| success | string | promise | 有一个成功 icon 的 toast  |
| error | string | promise | 有一个错误 icon 的 toast |
| loading | string | undefined | 有一个转圈的 toast |
| stop | - | undefined | 关闭 toast |
