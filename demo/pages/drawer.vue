<style lang="scss">
#drawer {
  background-color: $--color-bg-gray;

  .item {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 20px;
    margin-right: -20px;
    margin-left: -20px;
  }

  .shim {
    display: inline-block;
    width: calc(100% - 110px);
  }
}
</style>

<template>
  <div id="drawer" class="container">
    <div class="item">
      <button @click="open_2 = true">底部抽屉模式</button>
      <v-drawer v-model="open_2">
        <template slot="header">
          <span>111</span>
          <span @click="open_2 = false">222</span>
        </template>
        <p>start</p>
        <button @click="showToast">2333</button>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>x
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>end</p>
      </v-drawer>
    </div>
    <div class="item">
      <button @click="open_3 = true">左侧抽屉模式</button>
      <v-drawer v-model="open_3" from="left">
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </v-drawer>
    </div>
    <div class="item">
      <button @click="open_4 = true">右侧抽屉模式</button>
      <v-drawer v-model="open_4" from="right">
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </v-drawer>
    </div>
    <div class="item">
      <button @click="open_5 = true">顶部抽屉模式</button>
      <v-drawer v-model="open_5" from="top">
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </v-drawer>
    </div>
    <div class="item">
      <button @click="open_1 = true">普通 ActionSheet 模式</button>
      <v-drawer v-model="open_1" :strict="true" :count="2" cancel="取消">
        <div slot="0" @click="handleClick">233</div>
        <div slot="1">666</div>
      </v-drawer>
    </div>
    <div class="item drop-wrap">
      <button @click="open_7 = true">下拉 Dropdown 模式</button>
      <v-drawer v-model="open_7" :strict="true" :count="2" :dropdown="true" from="top" cancel="取消">
        <div slot="0">233</div>
        <div slot="1">666</div>
      </v-drawer>
    </div>
    <div class="item drop-wrap">
      <button @click="open_6 = !open_6">上拉 Dropdown 模式</button>
      <v-drawer v-model="open_6" :strict="true" :count="2" :dropdown="true" cancel="取消">
        <div slot="0">233</div>
        <div slot="1">666</div>
      </v-drawer>
    </div>
    <div class="item drop-wrap" style="width: 150px">
      <button @click="open_8 = true">左滑 Dropdown 模式</button>
      <v-drawer v-model="open_8" :dropdown="true" from="left">
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </v-drawer>
    </div>
    <div class="item">
      <button @click="open_10 = true">自定义 item</button>
      <v-drawer v-model="open_10" :lock="false" :dropdown="true" from="top" :offset="200">
        <div class="opt-item" @click="handleClick10">111</div>
        <div class="opt-item" @click="handleClick10">222</div>
        <div class="opt-item" @click="handleClick10">333</div>
      </v-drawer>
    </div>
    <div style="font-size: 0">
      <div class="shim" />
      <div class="item drop-wrap" style="width: 150px; display: inline-block">
        <button @click="open_9 = true">右滑 Dropdown 模式</button>
        <v-drawer v-model="open_9" :dropdown="true" from="right">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </v-drawer>
      </div>
    </div>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
    <p>2333</p>
  </div>
</template>

<script>
import VDrawer from '~/src/components/drawer/drawer'

export default {
  name: 'Drawer',
  components: {
    VDrawer
  },
  data() {
    return {
      open_1: false,
      open_2: false,
      open_3: false,
      open_4: false,
      open_5: false,
      open_6: false,
      open_7: false,
      open_8: false,
      open_9: false,
      open_10: false
    }
  },
  head() {
    return {
      title: '抽屉'
    }
  },
  methods: {
    showToast() {
      this.$toast.info('123')
    },
    handleClick() {
      this.open_1 = false
      this.$alert({
        title: '2333',
        buttons: ['取消', '确认']
      })
    },
    handleClick10() {
      this.open_10 = false
    }
  }
}
</script>
