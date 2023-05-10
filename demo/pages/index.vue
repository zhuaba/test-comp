<style lang="scss">
#homepage {
  width: 100vw;
  overflow-x: hidden;

  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

<template>
  <div id="homepage">
    <h1 class="title">
      <div class="logo" />
      <span>sakura</span>
    </h1>
    <h2 class="description">一个普通的的移动端 Vue 组件库</h2>
    <div class="container">
      <VCollapse :count="3">
        <template slot="title-0">基础组件</template>
        <template slot="panel-0">
          <NLink to="/button">Button 按钮</NLink>
          <NLink to="/checkbox">CheckBox 复选框</NLink>
          <NLink to="/img">Img 图片</NLink>
          <NLink to="/field">Field 输入框</NLink>
          <NLink to="/range">Range 滑块</NLink>
          <NLink to="/toggle">Toggle 开关</NLink>
          <NLink to="/alert">Alert 弹窗</NLink>
          <NLink to="/overlay">Overlay 遮罩</NLink>
          <NLink to="/toast">Toast 提示</NLink>
        </template>
        <template slot="title-1">复合组件</template>
        <template slot="panel-1">
          <NLink to="/datetime">Datetime 时间选择器</NLink>
          <NLink to="/drawer">Drawer 抽屉</NLink>
          <NLink to="/slidingdrawer">SlidingDrawer 滑动抽屉</NLink>
          <NLink to="/dialog">Dialog 对话框</NLink>
          <NLink to="/navbar">Navbar 导航栏</NLink>
          <NLink to="/search">Search 搜索框</NLink>
          <NLink to="/noticebar">NoticeBar 通知栏</NLink>
          <NLink to="/picker">Picker 选择器</NLink>
          <NLink to="/scroller">Scroller 滚动容器</NLink>
          <NLink to="/switcher">Switcher 切换容器</NLink>
          <NLink to="/uploader">Uploader 图片上传</NLink>
          <NLink to="/swipe">Swipe 轮播</NLink>
          <NLink to="/step">Step 步骤条</NLink>
          <NLink to="/collapse">Collapse 折叠面板</NLink>
        </template>
        <template slot="title-2">优化组件</template>
        <template slot="panel-2">
          <NLink to="/render">Render 惰性列表</NLink>
          <NLink to="/lazy">Lazy 懒加载容器</NLink>
        </template>
      </VCollapse>
    </div>
  </div>
</template>

<script>
import VCollapse from '~/src/components/collapse/collapse'

export default {
  components: {
    VCollapse
  }
}
</script>

<style lang="scss">
#homepage {
  .title {
    font-weight: 500;
    font-size: 36px;
    padding-left: 16px;
    margin-bottom: 10px;

    .logo {
      display: inline-block;
      width: 36px;
      height: 36px;
      background-color: #ffb7c5;
      vertical-align: middle;
    }

    span {
      vertical-align: middle;
    }
  }

  .description {
    margin: 0 0 40px;
    color: #7d7e80;
    font-size: 14px;
    padding-left: 16px;
    font-weight: normal;
  }

  .v-collapse {
    a {
      position: relative;
      display: block;
      color: #323233;
      font-size: 14px;
      line-height: 24px;
      padding: 10px 16px;

      &:before {
        content: '';
        position: absolute;
        left: 16px;
        top: 0;
        width: 100%;
        height: 1px;
        background-color: #ebedf0;
        transform: scaleY(0.5);
      }
    }

    &--arrow {
      margin-top: 10px;
    }
  }
}
</style>
