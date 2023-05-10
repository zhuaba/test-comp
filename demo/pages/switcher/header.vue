<style lang="scss">
#switcher-header {
  .v-switcher {
    height: 200px;

    &__content__item {
      padding: 10px;
    }
  }
}
</style>

<template>
  <div id="switcher-header">
    <VSwitcher :headers="header1">
      <template #0>
        <p>header：纯文字</p>
        {{ header1 }}
      </template>
      <template #1></template>
    </VSwitcher>
    <VSwitcher :headers="header2">
      <template #0>
        <p>header：带 icon</p>
        {{ header2 }}
      </template>
    </VSwitcher>
    <VSwitcher :headers="header3">
      <template #0>
        <p>header：动态 icon</p>
        {{ header3 }}
      </template>
    </VSwitcher>
    <VSwitcher :headers="header4" route-name="router-link">
      <template #0>
        <p>header：路由模式</p>
        {{ header4 }}
      </template>
    </VSwitcher>
    <VSwitcher :headers="header5">
      <template #0>
        <p>带禁用的</p>
        {{ header1 }}
      </template>
      <template #1>
        <p>2</p>
      </template>
      <template #2>
        <p>3</p>
      </template>
    </VSwitcher>
  </div>
</template>

<script>
import VSwitcher from '~/src/components/switcher'

export default {
  name: 'SwitcherHeader',
  components: {
    VSwitcher
  },
  computed: {
    header1() {
      return ['tab-0', 'tab-1']
    },
    header2() {
      return [
        {
          name: 'tab-0',
          icon: 'bili-font ic_add'
        },
        {
          name: 'tab-1',
          icon: 'bili-font ic_follow'
        }
      ]
    },
    header3() {
      return [
        {
          name: 'tab-0',
          icon: 'bili-font ic_add',
          'icon-active': 'bili-font ic_filter'
        },
        {
          name: 'tab-1',
          icon: 'bili-font ic_follow',
          'icon-active': 'bili-font ic_more'
        }
      ]
    },
    header4() {
      return [
        {
          name: 'tab-0',
          route: 'https://www.baidu.com'
        },
        {
          name: 'tab-1',
          route: '/switcher/header'
        }
      ]
    },
    header5() {
      return [
        {
          name: 'tab-0',
          disable: false,
          icon: 'bili-font ic_add'
        },
        {
          name: 'tab-1',
          disable: true,
          icon: 'bili-font ic_follow'
        },
        {
          name: 'tab-2',
          disable: false,
          icon: 'bili-font ic_follow'
        }
      ]
    }
  }
}
</script>
