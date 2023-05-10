### Overlay 遮罩

<Phone page="overlay"/>


### Usage
```javascript
import Vue from 'vue'
import { VOverlay } from '@bilibili/sakura'

Vue.prototype.$overlay = VOverlay

// 展示
const overlayId = this.$overlay.show({
  md: false,        // <boolean>, 是否使用 Android 模式，默认为 false
  lock: true,       // <boolean>, 是否阻止屏幕滚动，默认是 true
  el: undefined,    // <dom>, 指定父容器，默认为 body
  click: undefined, // <function>, 绑定一个点击事件
  show: true,       // <boolean>，当设为 false 的时候，蒙层是透明的，可配合 lock 只用于锁屏
  style: {},        // <object>，遮罩的内联样式
  zIndex: 990,      // <integer>, 修改 z-index 的值
})

// 隐藏
this.$overlay.hide(overlayId)

// PS：
// 每个 overlay 都会返回一个 id，
// 当多个 overlay 叠加展示时， 
// 为 hide 传入一个可选的 id 作为参数，
// 就不会关闭错误了，
// 如果不会出现嵌套的情况，那么就不需要关注 overlayId。
```

### Methods

| 方法名 | 参数类型 | 返回值 | 介绍 |
| --- | --- | --- | --- |
| show | object（可选） | overlayId | 展示一个遮罩 |
| hide | overlayId（可选） | undefined | 隐藏一个遮罩 |
