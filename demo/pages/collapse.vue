<style lang="scss">
#collapse {
  .title {
    margin: 0;
    padding: 35px 15px 15px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
  }

  .v-collapse {
    margin-bottom: 30px;

    &__panel {
      padding: 16px;
      color: #969799;
      font-size: 13px;
      line-height: 1.5;
      background-color: #fff;
    }
  }
}
</style>

<template>
  <div id="collapse">
    <p class="title">普通的用法</p>
    <VCollapse :count="2">
      <template slot="title-0"> 标题-1 </template>
      <template slot="panel-0"> wryyyyy </template>
      <template slot="title-1"> 标题-2 </template>
      <template slot="panel-1"> the world </template>
    </VCollapse>
    <p class="title">无动画</p>
    <VCollapse :count="2" :animate="false">
      <template slot="title-0"> 标题-3 </template>
      <template slot="panel-0"> DIO！ </template>
      <template slot="title-1"> 标题-4 </template>
      <template slot="panel-1"> JOJO！ </template>
    </VCollapse>
    <p class="title">手风琴</p>
    <VCollapse :count="2" :only="true">
      <template slot="title-0"> 标题-5 </template>
      <template slot="panel-0"> 食堂泼辣酱！ </template>
      <template slot="title-1"> 标题-6 </template>
      <template slot="panel-1"> 咋瓦鲁多！ </template>
    </VCollapse>
    <p class="title">默认展开</p>
    <VCollapse :count="2" active="0">
      <template slot="title-0"> 标题-7 </template>
      <template slot="panel-0"> 人类的赞歌 </template>
      <template slot="title-1"> 标题-8 </template>
      <template slot="panel-1"> 就是勇气的赞歌 </template>
    </VCollapse>
    <p class="title">默认禁止</p>
    <VCollapse :count="2" disabled="0">
      <template slot="title-0"> 标题-9 </template>
      <template slot="panel-0"> C.C 爱的人是 </template>
      <template slot="title-1"> 标题-10 </template>
      <template slot="panel-1"> 鲁路修·V·布里塔尼亚 </template>
    </VCollapse>
    <p class="title">动态追加</p>
    <VCollapse :count="count">
      <template slot="title-0"> 标题-11 </template>
      <template slot="panel-0"> BLEACH </template>
      <template slot="title-1"> 标题-12 </template>
      <template slot="panel-1"> NARUTO </template>
      <template slot="title-2"> 标题-13 </template>
      <template slot="panel-2"> ONE·PIECE </template>
    </VCollapse>
    <div class="container">
      <button @click="count = 3">点击添加一条</button>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import VCollapse from '~/src/components/collapse/collapse'

export default {
  name: 'Collapse',
  components: {
    VCollapse
  },
  data() {
    return {
      count: 2
    }
  },
  head() {
    return {
      title: '折叠面板'
    }
  }
}
</script>
