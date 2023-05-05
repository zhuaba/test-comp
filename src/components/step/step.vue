<template>
  <div
    class="v-step"
    :class="[[vertical ? 'v-step--vertical' : 'v-step--horizontal'], [desc ? 'v-step--desc' : 'v-step--asc']]"
  >
    <div
      v-for="(item, index) in list"
      :key="index"
      class="v-step__item"
      :class="`v-step__item--${current === index ? 'active' : current > index ? 'before' : 'after'}`"
      @click="handleClick(index)"
    >
      <slot :name="`icon-${index}`">
        <div class="v-step__item__icon">
          <span v-text="index + 1" />
        </div>
      </slot>
      <slot :name="`text-${index}`">
        <div class="v-step__item__text" v-text="item" />
      </slot>
    </div>
  </div>
</template>

<script>
import '../../theme/step.scss'

export default {
  name: 'VStep',
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Boolean,
      default: false
    },
    current: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(index) {
      this.$emit('click', index)
    }
  }
}
</script>
