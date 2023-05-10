### 更新日志

# v2.19.3
### Bug Fixes

- `v-navbar`修复渲染时会从上到下滑动出现的问题
# v2.19.2

### Features

- `v-switcher` header 支持 disable 属性

# v2.19.1

### Features

- `v-switcher`修改 header 数组长度为 1 时,也不会隐藏 header

# v2.19.0

- `v-toast`新增参数`el`

# v2.18.1

### Features

- `v-navbar`的`color`、`backgroundColor`支持传递数组
- `v-navbar`新增参数`showShadow`

# v2.18.0

### Features

- `v-lazy`新增`transition`参数，可为 slot 增加渐变动画
- `v-navbar`新增`threshold`参数，可为顶栏调整渐变比率
- `v-navbar`新增`scroll`参数，可监听渐变顶栏做自定义处理

### Bug Fixes

- `v-navbar`修复`color`属性无效的`bug`

### Breaking Change

- `v-navbar`之前的`back`按钮由`svg`图标换为`DOM`绘制图标
- `v-navbar`之前渐变会影响`slot`，现改为不影响`slot`需增加`scroll`参数做自定义回调

# v2.17.7

### Features

- `v-navbar`、`v-search`更新`Android-safe-area`为`40px`

# v2.17.6

### Features

- `v-drawer`移除`iOS safa-area`

# v2.17.5

### Features

- `v-checkbox`支持当`max = 1`时自动`toggle`

# v2.17.3

### Bug Fixes

- `v-affix`修复某些情况下拿不到`el.offsetWidth`的问题

# v2.17.2

### Bug Fixes

- `v-switcher`修复某些情况下拿不到`tab rect`的问题

# v2.17.0

### Features

- `v-scroller`增加`lock`和`unlock`两个方法

# v2.16.22

### Features

- `v-search`去除`chrome`自带的`×`

# v2.16.21

### Features

- `v-search`增加`close`参数

# v2.16.19

### Bug Fixes

- 修复弹窗类组件在部分 case 下无法撑起页面的 bug

# v2.16.18

### Features

- `v-img`：优化根据网络修改`DPR`的逻辑

# v2.16.17

### Bug Fixes

- `v-picker`：修复`value`同步更新的 bug

# v2.16.16

### Bug Fixes

- `v-scroller`：修复部分 case 默认样式的 bug

# v2.16.15

### Bug Fixes

- `v-scroller`：修复`bottom`事件在部分 case 无法触发的 bug

# v2.16.14

### Bug Fixes

- `v-img`：修复客户端渲染时`srcset`比`img`先加载的`bug`

# v2.16.12

### Features

- `core-js`降级：`3.8.1` --> `3.6.5`

# v2.16.10

### Bug Fixes

- `v-switcher`修复`headers`更新未初始化的`bug`

# v2.16.9

### Bug Fixes

- `v-img`支持本地图片

# v2.16.8

### Breaking Change

- 重构`v-lazy`：
  - 去掉`timeout`、`client-only`、`immediate`三个参数，增加`never`参数和`placehoder`插槽
  - 组件元素从`span`改为`div`
  - 除`never`情况下，所有的组件渲染都会在浏览器空闲时渲染（超时 2000ms）

# v2.16.7

### Features

- 为`v-dialog`增加`opened`和`closed`事件

# v2.16.6

### Features

- `v-field`增加`change`事件

### Breaking Change

- `v-field`的`blur`事件改为在数据变更后触发

# v2.16.4

### Features

- `v-switcher`增加`hidden-header`参数

# v2.16.3

### Features

- `v-dialog`增加`background`、`radius`、`padding`三个参数

### Breaking Change

- `v-dialog`的`border-raduis`默认为`5px`

### Bug Fixes

- 修复在`Android`设备上滚动锁屏报错的 bug

# v2.16.1

### Features

- `v-switcher`增加`fixed`事件
- `v-img`增加根据网络环境动态切换`DPR`
- 更新 `v-dialog`、`v-drawer`、`v-slidingdrawer`、`v-picker` 锁屏逻辑

# v2.15.0

### Features

- `v-switcher`增加`header-bottom`插槽

### Dependencies

- `async-validator`升级：`3.4.0` --> `3.5.1`
- `intersection-observer`升级：`0.11.0` --> `0.12.0`
- `throttle-debounce`升级：`2.3.0` --> `3.0.1`

### DevDependencies

- `webpack-cli`升级：`3.3.12`-->`4.2.0`
- `mini-css-extract-plugin`升级： `0.11.2` --> `1.3.3`
- `@babel/core`升级：`7.11.6` --> `7.12.10`
- `@babel/preset-env`升级：`7.11.5` --> `7.12.11`
- `@vue/babel-preset-jsx`升级：`1.1.2` --> `1.2.4`
- `@vue/cli-plugin-babel`升级：`4.5.6` --> `4.5.9`
- `babel-loader`升级：`8.1.0` --> `8.2.2`
- `core-js`升级：`3.6.5` --> `3.8.1`
- `file-loader`升级：`6.1.1` --> `6.2.0`
- `postcss-loader`升级：`4.0.4` --> `4.1.0`
- `sass-loader`升级：`10.0.3` --> `10.1.0`
- `style-resources-loader`升级：`1.3.3` --> `1.4.1`
- `vue-loader`升级：`15.9.3` --> `15.9.6`
- `css-loader`升级：`4.3.0` --> `5.0.1`
- `node-sass`升级：`4.14.1` --> `5.0.0`

# v2.14.16

### Breaking Change

- `v-navbar`在 Android 系统上全屏模式 padding-top 从 20px 改为 30px

### Bug Fixes

- `v-picker`修复布局 bug

# v2.14.15

### Features

- 优化`v-scroller`性能
- 为`v-slidingdrawer`和`v-drawer`增加`footer`插槽
- 为`v-slidingdrawer`和`v-drawer`增加`opened`和`closed`事件

# v2.14.12

### Breaking Change

- 移除`v-dialog`中`.v-dialog__core`的`overflow:hidden`

# v2.14.10

### Features

- 定义`v-drawer`、`v-dialog`、`v-sliding-drawer`的头部和底部插槽

# v2.14.5

### Bug Fixes

- 修复按需加载时的`IntersectionObserver polyfill`

# v2.14.4

### Bug Fixes

- 修复自定义主题时的报错

# v2.14.3

### Bug Fixes

- `v-datetime`修复一个`typo`

# v2.14.2

### Bug Fixes

- `v-picker`增加`cancel`、`submit`两个事件，增加`cancelText`和`submitText`两个 props

# v2.14.1

### Bug Fixes

- `v-picker`修复 ios 低版本(ios10)下滚动穿透问题

# v2.14.0

### Features

- `v-scroller`增加`is-scroll-x`属性支持横向滚动

# v2.13.5

### Bug Fixes

- `v-alert`样式修复

# v2.13.3

### Features

- `v-swipe`增加`loop`选项

# v2.13.2

### Breaking Change

- `v-drawer`的`DOM`结构变化：
  - before：`v-dialog__wrap` --> `v-dialog`
  - after：`v-dialog` --> `v-dialog__wrap` --> `v-dialog__core`

# v2.13.1

### Features

- `v-picker`增加`mask-close`支持
- `v-drawer`增加`mask-close`支持

### Breaking Change

- `v-drawer`移除容器的`@touchstart.stop`
- `v-drawer`、`v-slidingdrawer`的内部`z-index`和`v-overlay`对齐

# v2.12.10

### Bug Fixes

- `v-navbar`修复顶栏无背景图片时的高度撑开问题

### Features

- `v-uploader`增加插槽：`display`，用于自定义预览内容

# v2.12.8

### Bug Fixes

- `v-switcher`修复偶现情况下的无效渲染
- `v-affix`修复偶现情况下的无效渲染

# v2.12.7

### Features

- `v-picker`增加`header`插槽
- 增加`v-slidingDrawer`

# v2.12.4

### Features

- `v-swipe`增加`reClone`方法
- `v-navbar`增加`fluid`这个`props`，作用为是否全屏模式

### Breaking Change

- `v-drawer`的 props：`offset`默认设为`-1`

### Bug Fixes

- `v-navbar`修复安全区域问题

# v2.12.0

### Features

- `v-switcher`初始化时锚点动效不会从左边滑动过来了
- `v-debug`的`version`提示样式更新

### Breaking Change

- `v-switcher`去除`anchorPadding`这个`props`
- `v-picker`重构
  - 移除`itemCount`、`itemHeight`、`headerHeight`三个`props`
  - 移除`header`插槽，增加`title`插槽
  - 组件增加默认头部，增加`取消`、`确认`按钮
  - 增加`size`这个`props`，用于控制组件高度
  - `v-model`只有在点击`确认`按钮的时候才会同步更新

### DevDependencies

- `terser-webpack-plugin`升级：`4.2.0`-->`4.2.2`
- `webpack`升级：`4.44.1`-->`4.44.2`

# v2.11.2

### Features

- `v-scroller`优化下拉刷新

# v2.11.1

### Features

- `v-checkbox`增加`confirm`支持

# v2.11.0

### Features

- `v-lazyload`增加`disabled`支持
- `v-img`支持`img`的原生`loading="lazy"`属性（根据 UA）
- 增加`v-lazy`组件

### Breaking Change

- 删除`v-radio`组件
- `v-img`组件的`lazy`默认为`true`
- `v-img`组件的元素改为`picture`嵌套`source`和`img`

### DevDependencies

- `@babel/core`升级：`7.11.5`-->`7.11.6`
- `css-loader`升级：`4.2.2`-->`4.3.0`
- `terser-webpack-plugin`升级：`4.1.0`-->`4.2.0`
- `mini-css-extract-plugin`升级：`0.11.0`-->`0.12.0`
- `sass-loader`升级：`10.0.1`-->`10.0.2`

# v2.10.3

### Features

- `v-collapse`增加`close`事件

# v2.10.2

### Features

- `v-collapse`支持惰性渲染

### DevDependencies

- `@babel/core`升级：`7.11.4`-->`7.11.5`
- `@babel/preset-env`升级：`7.11.0`-->`7.11.5`
- `css-loader`升级：`4.2.1`-->`4.2.2`
- `file-loader`升级：`6.0.0`-->`6.1.0`
- `mini-css-extract-plugin`升级：`0.10.0`-->`0.11.0`
- `optimize-css-assets-webpack-plugin`升级：`5.0.3`-->`5.0.4`
- `sass-loader`升级：`9.0.3`-->`10.0.1`

# v2.10.1

### Features

- `v-dialog`增加`scale`类型的`transition`，去除`validator`

# v2.10.0

### Features

- 接入`冰清`的黑夜模式样式包 [h5-theme-mixin](http://npm.bilibili.co/package/@bilibili/h5-theme-mixin)调整黑夜模式下的色值

### Breaking Change

- 夜间模式样式 night-mode 挂载点从 `body` 转移到了 `html`

# v2.9.4

### Bug Fixes

- `v-switcher`
  - 修复背景色 bug

### Breaking Change

- `v-switcher`
  - 去除`header-top`插槽

# v2.9.2

### Bug Fixes

- `v-dialog`
  - 增加`footer`和`header`两个插槽

### DevDependencies

- `@babel/core`升级：`7.11.1`-->`7.11.4`

# v2.9.1

### Bug Fixes

- `v-datetime`
  - 修复调用`v-dialog`时的组件名

# v2.9.0

### Features

- `v-toggle`
  - 支持不同`size`以及颜色高亮
- `v-notice-bar`
  - 新增组件

# v2.8.6

### Bug Fixes

- `v-switcher`
  - 修复`align：start`时头部滚动的 bug
- `v-affix`
  - 修复`getScrollParent`在上个版本与`v-render`合并的 bug
- `v-scroller`
  - 更改`animation-duration`从`300ms`-->`320ms`

### DevDependencies

- `mini-css-extract-plugin`升级：`0.9.0`-->`0.10.0`
- `terser-webpack-plugin`升级：`4.0.0`-->`4.1.0`
- `throttle-debounce`升级：`2.2.1`-->`2.3.0`

# v2.8.5

### Bug Fixes

- `v-scroller`
  - 上拉或下拉的时候，容器无法滚动

# v2.8.4

### Features

- `v-scroller`
  - 增加`openFix`和`closeFix`方法

### Breaking Change

- `v-scroller`
  - 恢复设置`fixedScroll`为`true`

# v2.8.3

### Features

- `v-scroller`
  - 增加`fixedScroll`这个`props`，当设为 true 的时候才去修复 iOS 锁屏的 bug

### Bug Fixes

- `v-render`
  - 修复`column` > 1 时初始渲染节点不对齐的 bug
- `v-collapse`
  - 修复当`animate`为 true 时快速展开收起列表有概率丢失高度的 bug

### Breaking Change

- `v-scroller`
  - 默认不再去处理 iOS 的滚动锁屏问题

### DevDependencies

- `css-loader`升级：`4.2.0`-->`4.2.1`
- `sass-loader`升级：`9.0.2`-->`9.0.3`
- `async-validator`升级：`3.3.0`-->`3.4.0`

# v2.8.2

### Features

- `v-scroller`
  - 支持自定义下拉刷新和上拉加载更多

### Bug Fixes

- `v-scroller`
  - 修复上拉/下拉无法流控的 bug
- `v-render`
  - 修复`column` >1 时的流程 bug
- `slide.js`
  - 删除对`touch-action`的控制

### DevDependencies

- `webpack`升级：`4.44.0`-->`4.44.1`
- `babel/core`升级：`7.10.5`-->`7.11.1`
- `css-loader`升级：`4.1.0`-->`4.2.0`
- `terser-webpack-plugin`升级：`3.0.8`-->`4.0.0`

# v2.8.1

### Bug Fixes

- `v-checkbox`
  - 修复文字样式

# v2.8.0

### Features

- `v-checkbox`
  - 复选框

### DevDependencies

- `webpack`升级：`4.43.0`-->`4.44.0`
- `css-loader`升级：`3.6.0`-->`4.1.0`
- `terser-webpack-plugin`升级：`3.0.7`-->`3.0.8`

# v2.7.4

### Bug Fixes

- `v-field`
  - 修复`v-model.number`时自动`props`校验报错的 bug

# v2.7.3

### Bug Fixes

- `v-field`
  - 修复`v-model.number`时自动`value.trim`的 bug

# v2.7.1

### Breaking Change

- `v-refresh`
  - 移除该组件，请在`v-scroller`里使用

# v2.7.0

### Breaking Change

- `v-img`
  - DOM 结构从`<picture class="v-img"><source/><img/></picture>`改为`<img class="v-img" />`
  - `resizeImage` 回调里去掉 `webP` 这个参数
  - `SSR`的时候，只渲染`data-src`，不渲染`src`

### Bug Fixes

- `v-scroller`
  - 优化 DOM 结构，根据`props`做判断来渲染上下加载模块
- `Array.fill`
  - 移除项目中所有的这个 API 调用，解决兼容性问题

### Features

- `v-datetime`
  - 更新样式
- `v-picker`
  - 支持二维数组的数据源

### DevDependencies

- `@babel/core`升级：`7.10.4`-->`7.10.5`
- `eslint`升级：`7.4.0`-->`7.5.0`
- `terser-webpack-plugin`升级：`3.0.6`-->`3.0.7`

# v2.6.18

### Bug Fixes

- `lazyload.js`
  - 修复`scroll`情况下，`bind` 时父节点是`null`的 bug
- `v-img`
  - 修复`resizeImage`在宽高都不传时会拼接`.webp`的 bug

# v2.6.17

### Bug Fixes

- `slide.js`
  - 修复`HTMLCollection`解构在低端机上的实现问题：[#6ebc001c](https://git.bilibili.co/crayon/sakura/commit/6ebc001c82633d0866a496da782e69070c4fc6ee)

# v2.6.16

### Bug Fixes

- `v-collapse`
  - 修复`array.fill`在低端机上的实现问题：[#e33e1321](https://git.bilibili.co/crayon/sakura/commit/e33e1321e2f45eec9814d157830bc423f38ff0d9)
