<style lang="scss">
.demo {
  box-sizing: border-box;
  padding: 0 15px 15px;
  height: 100px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(80, 80, 80, 0.11);
  }
}
</style>

<template>
  <div class="demo">
    <div :style="{ backgroundColor: item.style.color }">
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RenderItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>
