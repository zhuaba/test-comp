### Navbar 导航栏

<Phone page="navbar"/>

> 请搭配 meta 属性使用：

```html
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
/>
```

### Usage

```vue
<template>
  <VNavbar
    title="标题是个 props"
    :show-border="false"
    :show-back="true"
    color="#fff"
    background-color="#FB7299"
    @back="handleBackEvent"
  >
    <template #title>
        <div>solt-title后title属性失效<i class="bili-font ic_input_close"></i></div>
      </template>
    <template #before>
      <i class="bili-font ic_follow"></i>
    </template>
    <template #after>
      <i class="bili-font ic_add"></i>
      <span>一些按钮</span>
    </template>
    <template>
      当设置了`background-image`的时候在这里添加内容..
    </template>
  </VNavbar>
</template>

<script>
import { VNavbar } from '@bilibili/sakura'

export default {
  components: {
    VNavbar
  },
  methods: {
    handleBackEvent() {
      // do something
    }
  }
}
</script>
```

### Props

| 参数             | 说明                   | 类型          | 默认值  | 必选 |
| ---------------- | ---------------------- | ------------- | ------- | ---- |
| title            | 标题                   | string        | -       | N    |
| fixed            | 是否固定在页面         | boolean       | true    | N    |
| fluid            | 是否全屏模式           | boolean       | true    | N    |
| show-border      | 是否展示下方 border    | boolean       | false   | N    |
| show-back        | 是否展示左侧 back 按钮 | boolean       | false   | N    |
| show-shadow      | 在背景图片模式下顶部渲染黑色蒙层 | boolean | true | N |
| color            | 文字和图标的颜色       | String(Color) \ Array[Color x 2] | #fff    | N    |
| background-color | 背景的颜色             | String(Color) \ Array[Color x 2] | #FB7299 | N    |
| background-image | 背景的图片             | String(Url)   | -       | N    |
| scroll | 在有背景的顶栏时，可增加这个 props 来自定义面板动画 | Function | - | N| 
| threshold | 渐变的比率，比率越大渐变档位越多，性能越差 | Number | 20 | N |

### Events

| 事件 | 说明             |
| ---- | ---------------- |
| back | 点击了 back 按钮 |

### Slot

| 插槽名  | 介绍                       |
| ------- | -------------------------- |
| default | 标题下方的 slot            |
| title   | 标题的slot(Props:title失效,自定义显示内容)            |
| before  | back 按钮后，标题前的 slot |
| after   | 标题后面的 slot            |
