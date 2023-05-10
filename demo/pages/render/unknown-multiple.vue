<style lang="scss">
#multiple {
  height: 100vh;
  padding: 10px 10px 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  .demo-item {
    position: absolute;
    width: 50%;
    box-sizing: border-box;
    padding-bottom: 10px;

    > div {
      height: 100%;
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 1px 3px 0 rgba(80, 80, 80, 0.11);
      overflow: hidden;
      padding-bottom: 40px;
      box-sizing: border-box;
      background-color: #fafbfc;

      > div {
        position: relative;
        height: 0;

        > div {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

<template>
  <div id="multiple" @scroll="handleScroll">
    <VRender ref="render" :total="1000" :remain="20" :column="2">
      <div v-for="(item, index) in items" :key="index" :style="getItemStyle(item, index)" class="demo-item">
        <div>
          <div
            :style="{
              backgroundColor: item.style.color,
              paddingTop: `${(item.height / item.width) * 100}%`
            }"
          >
            <div>
              <span>index：{{ index }}</span>
              <span>width：{{ item.width }}</span>
              <span>height：{{ item.height }}</span>
            </div>
          </div>
        </div>
      </div>
    </VRender>
  </div>
</template>

<script>
import VRender from '~/src/components/render/render'

export default {
  name: 'UnknownMultiple',
  components: {
    VRender
  },
  data() {
    return {
      items: this.$factory.get(1000),
      width: 145,
      column: [0, 0],
      cache: {}
    }
  },
  methods: {
    handleScroll(evt) {
      this.$refs.render.scroll(evt.target.scrollTop)
    },
    getItemStyle(item, index) {
      if (this.cache[index]) {
        return this.cache[index]
      }
      const { width, column } = this
      const height = item.height * (width / item.width) + 50
      const columnIndex = index < column.length ? index % 2 : column.indexOf(Math.min(...column))
      const top = column[columnIndex]
      this.column[columnIndex] += height
      const result = {
        height: `${height}px`,
        width: `${width}px`,
        top: `${top}px`,
        left: columnIndex ? `${width + 10}px` : 0
      }
      this.cache[index] = result
      return result
    }
  }
}
</script>
