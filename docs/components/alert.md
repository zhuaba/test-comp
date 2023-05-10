### Alert 弹窗

<Phone page="alert"/>

### Import

```javascript
import Vue from 'vue'
import { VAlert } from '@bilibili/sakura'

Vue.prototype.$alert = VAlert({
  md: '<boolean>|是否使用 Android 样式，默认为 false'
})
```

### Usage
```javascript
export default {
  methods: {
    showAlert() {
      this.$alert({
        title: 'title',             // string
        message: 'message',         // string
        buttons: ['取消', '确认'],   // array | string
        input: {
          placeholder: '请输入',
          type: 'text'
        },  // 默认是 null，如果传递对象则会展示一个 input，对象的 key-value 都会作为 input 的 attr
        maskClose: true,            // boolean，点击背景是否可关闭，默认 false（不会触发 callback）
        vertical: false,            // boolean，如果设置为 true，按钮组就是竖直排列
        callback: (index, value) => {
          // 1. 点击的 button 的 index
          // 2. 如果传了 input，则为用户输入的值
        }
      })
    }
  }
}
```


### Params

| 参数 | 说明 | 类型 | 默认值 | 必选 |
| --- | --- | --- | --- | --- |
| title | 弹窗的标题 | string | '提示' | N |
| message | 弹窗的描述 | string | - | N |
| buttons | 点击的按钮 | string \| array | ['确定'] | N |
| input | prompt 模式的 input attrs | object | null | N |
| maskClose | 点击遮罩是否关闭 | boolean | false | N |
| vertical | 按钮是否竖直排列 | boolean | false | N |
| callback | 按钮点击回调函数 | function | null | N |
