<style lang="scss">
#render {
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
  <div id="render" class="container">
    <NLink :to="`/render/known-single-for${query}`">
      <p>单列固定高度（单组件列表，v-for）</p>
    </NLink>
    <NLink :to="`/render/known-single-prop${query}`">
      <p>单列固定高度（单组件列表，props）</p>
    </NLink>
    <NLink :to="`/render/unknown-single${query}`">
      <p>单列不定高度（多态列表）</p>
    </NLink>
    <NLink :to="`/render/unknown-big${query}`">
      <p>单列大列表（大列表）</p>
    </NLink>
    <NLink :to="`/render/unknown-multiple${query}`">
      <p>多列不定高度（瀑布流）</p>
    </NLink>
  </div>
</template>

<script>
export default {
  name: 'Render',
  head() {
    return {
      title: '惰性列表'
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
