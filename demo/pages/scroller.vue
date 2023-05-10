<style lang="scss">
#scroller {
  height: calc(100vh - 69px);
  overflow: auto;
  @include dark-elem(color, $--color-text);
  .box {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 25px;
    top: 200px;
    width: 200px;
    border-radius: 5px;
    color: #fff;
    padding: 10px;
    z-index: 999;
  }
  .top-bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: gray;
    color: #0c0c0c;
    z-index: 999;
  }
  h4 {
    margin: 5px 0;
  }
  .scroll-x {
    height: 10vh;
    border-bottom: 1px solid #e0e0e0;
  }
  .scroll-y {
    height: calc(100% - 10vh);
  }

  .hoz-item {
    display: inline-block;
  }
}
</style>

<template>
  <div id="scroller">
    <div class="box">
      <p>scroll-top： {{ offsetTop }}</p>
      <p>duration：{{ isUp ? 'up' : isRight ? 'right' : 'done' }}</p>
      <p>state：{{ state }}</p>
    </div>
    <h4>横向滚动</h4>
    <div class="scroll-x">
      <VScroller
        ref="scrollerX"
        :is-scroll-x="true"
        :scroll-throttle="0"
        @top="updateState('left')"
        @bottom="updateState('right')"
        @scroll="handleScroll"
      >
        <p v-for="i in count" :key="i" class="hoz-item" v-text="i" />
        <button @click="toLeft">To Left</button>
      </VScroller>
    </div>
    <h4>纵向滚动</h4>
    <div class="scroll-y">
      <VScroller
        ref="scroller"
        :scroll-throttle="0"
        use-refresh
        use-infinite
        @top="updateState('top')"
        @refresh="handleRefresh"
        @infinite="handleInfinite"
        @bottom="updateState('bottom')"
        @scroll="handleScroll"
        @pull-down-start="handlePullDown('start')"
        @pull-up-start="handlePullUp('start')"
        @pull-down-end="handlePullDown('end')"
        @pull-up-end="handlePullUp('end')"
      >
        <p v-for="i in count" :key="i" v-text="i" />
        <button @click="toTop">去顶部</button>
      </VScroller>
    </div>
  </div>
</template>

<script>
import VScroller from '~/src/components/scroller/scroller'
/* eslint-disable */
export default {
  name: 'Scroller',
  components: {
    VScroller,
  },
  data() {
    return {
      offsetTop: 0,
      isUp: false,
      isRight: false,
      state: '',
      count: 50,
    }
  },
  methods: {
    handleScroll({ offsetTop, isUp, offsetLeft, isRight }) {
      this.offsetTop = offsetTop || offsetLeft
      this.isUp = isUp
      this.isRight = isRight
    },
    handleRefresh() {
      this.$toast.info('开始刷新')
      setTimeout(() => {
        this.$toast.info('加载完成')
        this.$refs.scroller.close()
      }, 1000)
    },
    handleInfinite() {
      this.$toast.info('开始加载更多')
      setTimeout(() => {
        this.$toast.info('加载完成')
        this.$refs.scroller.close()
      }, 1000)
    },
    handleLoadMore() {
      this.count += 50
    },
    updateState(text) {
      this.state = text
    },
    toTop() {
      this.$refs.scroller.scrollY(0)
    },
    toLeft() {
      this.$refs.scrollerX.scrollX()
    },
    handlePullDown(log) {},
    handlePullUp(log) {},
    reloadData() {},
  },
  head() {
    return {
      title: '滚动容器',
    }
  },
}
</script>
