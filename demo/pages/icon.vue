<style lang="scss">
#icon {
  font-size: 0;

  .item {
    display: inline-block;
    width: 25%;
    text-align: center;
    padding: 10px 0;

    i {
      font-size: 36px;
      color: $--color-text;
      @include night() {
        color: night-color($--color-text);
      }
    }

    p {
      font-size: 12px;
      color: $--color-text-light;
      @include night() {
        color: night-color($--color-text-light);
      }
    }
  }
}
</style>

<template>
  <div id="icon">
    <div v-for="item in icons" :key="item" class="item">
      <i :class="item" class="bili-font" />
      <p v-text="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  head() {
    return {
      title: '图标'
    }
  },
  computed: {
    icons() {
      return [
        'ic_success',
        'ic_error',
        'ic_input_close',
        'ic_add',
        'ic_into',
        'ic_more',
        'ic_filter',
        'ic_change',
        'ic_follow',
        'ic_pulldown',
        'ic_pullup',
        'ic_collection',
        'ic_descend',
        'ic_ascend',
        'ic_search',
        'ic_hufen'
      ]
    }
  }
}
</script>
