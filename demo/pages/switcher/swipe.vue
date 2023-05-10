<style lang="scss">
#switcher-swipe {
  height: 400px !important;

  [class^='content-'] {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  @each $index in 1, 3, 5, 7, 9 {
    .content-#{$index} {
      background-color: #657786;
      color: #fff;
    }
  }
  @each $index in 0, 2, 4, 6, 8 {
    .content-#{$index} {
      background-color: mediumseagreen;
      color: #fff;
    }
  }

  .swipe-wrap {
    position: relative;
    height: 0;
    padding-top: 50%;
    box-sizing: border-box;

    .v-swipe {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  img {
    display: block;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .test-scroll {
    overflow-x: auto;
    white-space: nowrap;

    button {
      padding: 0 30px;
    }
  }
}
</style>

<template>
  <VSwitcher :headers="headers" :default-index="1" :anchor-padding="16">
    <template #0>
      <div class="content-0">
        <div class="swipe-wrap">
          <VSwipe :length="3">
            <div slot="0" style="background-color: #6dc781">
              <button @click="handleClickToast">点击toast</button>
            </div>
            <div slot="1" style="background-color: #cc99cd">1</div>
            <div slot="2" style="background-color: #6a8bad">2</div>
          </VSwipe>
        </div>
      </div>
    </template>
    <template #1>
      <div class="content-1">
        <img src="http://i2.hdslb.com/bfs/archive/eb033baf984bc5c2244657f018bb9ad4d97a2480.jpg" />
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
      </div>
    </template>
    <template #2>
      <div class="content-2">
        <button @click="open_drawer = !open_drawer">下拉 Dropdown 模式</button>
        <VDrawer
          v-model="open_drawer"
          :strict="true"
          :count="2"
          :offset="20"
          :dropdown="true"
          :lock="false"
          from="top"
          cancel="取消"
        >
          <div slot="0" class="test-scroll">
            <button>start</button>
            <button>2333</button>
            <button>666</button>
            <button>hhh</button>
            <button>hiahahia</button>
            <button>jojo</button>
            <button>dio</button>
            <button>end</button>
          </div>
          <div slot="1">666</div>
        </VDrawer>
      </div>
    </template>
    <template #3>
      <div class="content-3">
        <img src="https://i0.hdslb.com/bfs/article/654d8b848a09ba45655893cecddc5aa09f97c111.png" />
      </div>
    </template>
    <template #4>
      <div class="content-4">
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
        <p>444</p>
      </div>
    </template>
    <template #5>
      <div class="content-5">
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
        <p>555</p>
      </div>
    </template>
    <template #6>
      <div class="content-6">
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
      </div>
    </template>
    <template #7>
      <div class="content-7">
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
        <p>777</p>
      </div>
    </template>
    <template #8>
      <div class="content-8">
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
        <p>888</p>
      </div>
    </template>
    <template #9>
      <div class="content-9">
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
        <p>999</p>
      </div>
    </template>
  </VSwitcher>
</template>

<script>
import VSwitcher from '~/src/components/switcher'
import VSwipe from '~/src/components/swipe/swipe'
import VDrawer from '~/src/components/drawer/drawer'

export default {
  name: 'SwitcherSwipe',
  components: {
    VSwitcher,
    VDrawer,
    VSwipe
  },
  data() {
    return {
      open_drawer: false
    }
  },
  computed: {
    headers() {
      // return ['tab-0', 'tab-1', 'tab-2', 'tab-3']
      return ['tab-0', 'tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6', 'tab-7', 'tab-8', 'tab-9']
    }
  },
  methods: {
    handleClickToast() {
      this.$toast.info('toast')
    }
  }
}
</script>
