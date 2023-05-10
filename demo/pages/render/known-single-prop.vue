<style lang="scss">
#component {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding-top: 15px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  .banner {
    width: 100%;
    height: 200px;
    background-color: cornflowerblue;
    margin-bottom: 15px;
  }
}
</style>

<template>
  <div id="component" @scroll="handleScroll">
    <div class="banner">这里有一个banner卡位</div>
    <VRender ref="render" :total="1000" :remain="20" :height="100" :item="item" :getter="getProps" />
  </div>
</template>

<script>
import Item from '~/demo/components/RenderItem'
import VRender from '~/src/components/render/render'

export default {
  name: 'KnownSingleProp',
  components: {
    VRender
  },
  data() {
    return {
      items: this.$factory.get(1000),
      item: Item
    }
  },
  methods: {
    handleScroll(evt) {
      this.$refs.render.scroll(evt.target.scrollTop)
    },
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
