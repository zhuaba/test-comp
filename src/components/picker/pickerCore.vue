<template>
  <div class="v-picker">
    <div
      v-for="(column, index) in columnData"
      :key="index"
      ref="column"
      class="v-picker__column"
      @scroll="handleScroll($event, index)"
    >
      <div class="v-picker__list" :style="{ height: `${column.length * itemHeight}px` }">
        <div
          v-for="(item, subIndex) in column"
          :key="item[valueName]"
          class="v-picker__item"
          :class="[
            { 'is-active': columnCount > 1 ? item[valueName] === selected[index] : item[valueName] === selected },
            { 'is-disabled': !!item.disabled }
          ]"
          @click="handleClick(item, index, subIndex)"
          v-text="item[labelName]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import '../../theme/picker.scss'
import { throttle } from 'throttle-debounce'
import { isArray } from '../../utils/types'
import { initEmptyArray } from '../../utils/helper'
import scrollToY from '../../prototypes/scrolly'
import PropsMixin from './props'
import { computeArrayDeep, getArrayFirstValue, getChildrenById, findObjAtArrIndex, is2dArray } from './utils'

export default {
  name: 'PickerCore',
  mixins: [PropsMixin],
  props: {
    valueData: {
      required: true,
      type: [String, Number, Array]
    }
  },
  data() {
    const is2D = is2dArray(this.list)
    const columnCount = is2D ? this.list.length : computeArrayDeep(this.list, this.childName)
    const columnData = is2D ? this.list : columnCount > 1 ? initEmptyArray(columnCount, []) : [this.list]
    const valueData = this.valueData
    let selected
    if (columnCount > 1) {
      selected =
        isArray(valueData) && valueData.length
          ? valueData
          : getArrayFirstValue(this.list, this.valueName, this.childName, initEmptyArray(columnCount, ''))
      if (selected.length < columnCount) {
        selected = selected.concat(initEmptyArray(columnCount - selected.length, ''))
      }
    } else {
      selected = valueData || this.list[0][this.valueName]
    }
    return {
      columnCount,
      columnData,
      selected,
      changeIndex: 0,
      initCount: 0,
      itemHeight: 0
    }
  },
  computed: {
    pickerHeight() {
      return this.$el ? this.$el.clientHeight : 0
    },
    itemCount() {
      if (!this.pickerHeight || !this.itemHeight) {
        return 0
      }

      return Math.floor(this.pickerHeight / this.itemHeight)
    },
    condition() {
      return this.itemCount % 2 ? this.itemHeight : this.itemHeight / 2
    },
    jumpCount() {
      return ((this.itemCount - 1) / 2) | 0
    },
    is2dResource() {
      return is2dArray(this.list)
    }
  },
  watch: {
    selected: {
      handler(val) {
        this.refreshColumnData(val)
        this.$emit('update:valueData', val)
      },
      immediate: true,
      deep: true
    },
    valueData(val) {
      this.selected = val
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.calcItemHeight()
        this.$nextTick(() => {
          this.initScroll()
        })
      }, 0)
    })
  },
  methods: {
    initScroll() {
      if (isArray(this.selected)) {
        this.columnData.forEach((columnData, colIndex) => {
          const itemIndex = findObjAtArrIndex(this.columnData[colIndex], this.valueName, this.selected[colIndex])
          setTimeout(() => {
            this.autoScrollColumn(this.columnData[colIndex][itemIndex], colIndex, itemIndex, 0)
          }, colIndex * 20)
        })
      } else {
        const itemIndex = findObjAtArrIndex(this.columnData[0], this.valueName, this.selected)
        this.autoScrollColumn(this.columnData[0][itemIndex], 0, itemIndex, 0)
      }
    },
    handleScroll: throttle(100, function (event, index) {
      const { itemHeight, jumpCount, condition } = this
      const top = event.target.scrollTop
      const columnLen = this.columnData[index].length
      const maxOffset = columnLen * itemHeight - this.pickerHeight
      let targetIndex
      if (top <= 0) {
        targetIndex = 0
      } else if (top <= condition) {
        /**
         * top = 0 的时候，应该 = 0
         * top = condition 的时候，应该 = jumpCount + 1
         */
        targetIndex = Math.ceil(top / (condition / (jumpCount + 1)))
      } else if (top >= maxOffset) {
        targetIndex = columnLen - 1
      } else if (top >= maxOffset - condition) {
        /**
         * columnLen = 15
         * itemCount = 5
         * 到最后的时候，页面展示的是 [10, 11, 12, 13, 14] 5个
         * 也就是说 14 要处理 12, 13 两个过度，jumpCount = 2，condition = itemHeight
         * ------
         * columnLen = 15
         * itemCount = 6
         * 也就是说 jumpCount = 2，condition = itemHeight / 2
         * 当页面距离底部 condition 时，展示的是 [(8 / 2), 9, 10, 11, 12, 13, (14 / 2)]
         * 也就是说需要过度的是 12，13
         * ------
         * 当 top = maxOffset - condition 时，targetIndex = columnLen - 1 - jumpCount
         * 当 top = maxOffset 时，targetIndex = columnLen - 1
         */
        targetIndex = columnLen - 1 - Math.ceil(jumpCount * ((maxOffset - top) / condition))
      } else {
        /**
         * top = condition，targetIndex = jumpCount + 1
         * maxOffset - condition， targetIndex = columnLen - 1 - jumpCount
         */
        targetIndex =
          Math.ceil((top - condition) / itemHeight + (top - condition) / (maxOffset - 2 * condition)) + jumpCount + 1
      }
      const targetValue = this.columnData[index][targetIndex]
      if (!targetValue || targetValue.disabled) {
        return
      }
      this.changeIndex = index
      if (this.columnCount > 1 || this.is2dResource) {
        this.$set(this.selected, index, targetValue[this.valueName])
      } else {
        this.selected = targetValue[this.valueName]
      }
      if (this.is2dResource) {
        return
      }
      this.$nextTick(() => {
        this.updateDefSelected()
      })
    }),
    handleClick(item, colIndex, itemIndex) {
      if (item && item.disabled) {
        return
      }
      this.updateCurSelected(item, colIndex)
      this.autoScrollColumn(item, colIndex, itemIndex)
    },
    autoScrollColumn(item, colIndex, itemIndex, time = 100) {
      const { itemHeight, condition, jumpCount } = this
      const columnLen = this.columnData[colIndex].length
      const maxOffset = columnLen * itemHeight - this.pickerHeight
      let offset
      if (itemIndex <= 0) {
        offset = 0
      } else if (itemIndex <= jumpCount + 1) {
        /**
         * columnLen = 15
         * itemCount = 5
         * condition = itemHeight，jumpCount = 2
         * 当 itemIndex = jumpCount + 1 时，offset 应该 = condition
         * 当 itemIndex = 0 时，0
         */
        offset = (condition / (jumpCount + 1)) * itemIndex
      } else if (itemIndex >= columnLen - 1) {
        offset = maxOffset
      } else if (itemIndex >= columnLen - 1 - jumpCount) {
        /**
         * 当 itemIndex = columnLen - 1 时，offset = maxOffset
         * 当 itemIndex = columnLen - 1 - jumpCount 时，offset = maxOffset - condition
         */
        offset = maxOffset - (columnLen - 1 - itemIndex) * (condition / jumpCount) + 1
      } else {
        /**
         * 当 itemIndex = jumpCount + 1 时 offset = condition
         * 当 itemIndex = columnLen - 1 - jumpCount，offset = maxOffset - condition
         */
        offset = condition + (itemIndex - (jumpCount + 1)) * (1 - 1 / (columnLen - 2 - 2 * jumpCount)) * itemHeight
      }
      scrollToY(offset, {
        dom: this.$refs.column[colIndex],
        time
      })
      this.$nextTick(() => {
        this.initCount++
      })
    },
    updateCurSelected(item, index) {
      const value = item ? item[this.valueName] : ''
      if (this.columnCount > 1) {
        this.$set(this.selected, index, value)
      } else {
        this.selected = value
      }
      this.changeIndex = index
      if (!this.itemHeight) {
        this.$nextTick(() => {
          this.calcItemHeight()
        })
      }
    },
    updateDefSelected() {
      const { changeIndex, columnCount, valueName } = this
      if (changeIndex >= columnCount - 1 || this.initCount < columnCount) {
        return
      }
      const oldId = this.selected[changeIndex + 1]
      const index = this.columnData[changeIndex + 1].findIndex((item) => item[valueName] === oldId)
      if (index === -1) {
        this.updateCurSelected(this.columnData[changeIndex + 1][0], changeIndex + 1)
      }
    },
    refreshColumnData(val) {
      if (!isArray(val) || this.is2dResource) {
        return
      }
      const result = []
      val.forEach((id, index) => {
        if (index) {
          result.push(getChildrenById(result[index - 1], val[index - 1], this.valueName, this.childName))
        } else {
          result.push(this.list)
        }
      })
      this.columnData = result
    },
    calcItemHeight() {
      if (!this.$el) {
        return
      }

      const item = this.$el.querySelector('.v-picker__item')
      if (!item) {
        return
      }
      this.itemHeight = item.clientHeight
    }
  }
}
</script>
