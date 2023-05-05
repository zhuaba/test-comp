<template>
  <div class="v-collapse">
    <div
      v-for="(item, index) in count"
      :key="index"
      :class="{ 'v-collapse__item--active': selected[index] }"
      class="v-collapse__item"
    >
      <div
        :class="{ 'v-collapse__header--disabled': blocked[index] }"
        class="v-collapse__header"
        @click="toggle(index)"
      >
        <slot v-if="arrow" :name="`arrow-${index}`">
          <i :class="{ 'v-collapse__arrow--expanded': selected[index] }" class="bili-font ic_into v-collapse__arrow" />
        </slot>
        <div class="v-collapse__title">
          <slot :name="`title-${index}`" />
        </div>
      </div>
      <VCollapseTransition :use="animate">
        <div v-show="selected[index]" class="v-collapse__panel">
          <slot v-if="matched.indexOf(index) !== -1" :name="`panel-${index}`" />
        </div>
      </VCollapseTransition>
    </div>
  </div>
</template>

<script>
import '../../theme/collapse.scss'
import { isArray } from '../../utils/types'
import { initEmptyArray } from '../../utils/helper'
import VCollapseTransition from '../../transition/collapseTransition'

const formatSelected = (count, active, def) => {
  const result = initEmptyArray(count, false)
  if (active === undefined && !def) {
    return result
  }

  if (isArray(active)) {
    active.forEach((val) => {
      if (val < count) {
        result[val] = true
      }
    })
  } else {
    result[parseInt(active)] = true
  }

  if (def) {
    def.forEach((val, index) => {
      if (index < count) {
        result[index] = val
      }
    })
  }

  return result
}

export default {
  name: 'VCollapse',
  components: {
    VCollapseTransition
  },
  props: {
    active: { // eslint-disable-line
      type: [Array, Number, String]
    },
    disabled: { // eslint-disable-line
      type: [Array, Number, String]
    },
    count: {
      type: Number,
      required: true,
      validator: (val) => val > 1
    },
    arrow: {
      type: Boolean,
      default: true
    },
    animate: {
      type: Boolean,
      default: true
    },
    only: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const matchedArr = []
    const selectedArr = formatSelected(this.count, this.active)
    selectedArr.forEach((item, index) => {
      if (item) {
        matchedArr.push(index)
      }
    })
    return {
      selected: selectedArr,
      blocked: formatSelected(this.count, this.disabled),
      matched: matchedArr
    }
  },
  watch: {
    count(val) {
      this.selected = formatSelected(val, this.active, this.selected)
    }
  },
  methods: {
    toggle(index) {
      const { disabled } = this
      if (disabled !== undefined) {
        // eslint-disable-next-line
        if (isArray(disabled) && disabled.indexOf(index) !== -1) {
          return
        } else if (+disabled === index) {
          return
        }
      }
      if (this.only && !this.selected[index]) {
        const oldIndex = this.selected.indexOf(true)
        oldIndex !== -1 && this.$emit('close', oldIndex)
        const result = initEmptyArray(this.count, false)
        result[index] = true
        this.selected = result
        this.$emit('open', index)
        // eslint-disable-next-line
        if (this.matched.indexOf(index) === -1) {
          this.matched.push(index)
        }
      } else {
        const result = !this.selected[index]
        this.$set(this.selected, index, result)
        this.$emit(result ? 'open' : 'close', index)
        // eslint-disable-next-line
        if (this.matched.indexOf(index) === -1) {
          this.matched.push(index)
        }
      }
    }
  }
}
</script>
