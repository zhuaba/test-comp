<style lang="scss">
#switcher {
  padding-left: 0;
  padding-right: 0;
  p {
    @include dark-elem(color, $--color-text);
  }
  > a {
    display: block;
    padding: 10px;
    color: $--color-text;
  }
}
</style>

<template>
  <div id="switcher" class="container">
    <NLink :to="`/switcher/header${query}`">
      <p>header的传参方式</p>
    </NLink>
    <NLink :to="`/switcher/align${query}`">
      <p>align的几种样式</p>
    </NLink>
    <NLink :to="`/switcher/before-after${query}`">
      <p>tab前后特殊模块</p>
    </NLink>
    <NLink :to="`/switcher/fixed${query}`">
      <p>tab 设为 fixed</p>
    </NLink>
    <NLink :to="`/switcher/click${query}`">
      <p>支持点击切换</p>
    </NLink>
    <NLink :to="`/switcher/slide${query}`">
      <p>支持手势切换</p>
    </NLink>
    <NLink :to="`/switcher/swipe${query}`">
      <p>支持手势跟随切换</p>
    </NLink>
  </div>
</template>

<script>
export default {
  name: 'Switcher',
  head() {
    return {
      title: '切换容器'
    }
  },
  computed: {
    query() {
      const query = this.$route.query
      return `?from=${query.from}&ios=${query.ios}&night=${query.night}`
    }
  }
}
</script>
