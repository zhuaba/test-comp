<template>
  <VDrawer v-model="visible" from="bottom" :size="size" :lock="false" class="v-picker__drawer">
    <div slot="header" class="v-picker__header">
      <slot name="header">
        <div class="cancel-btn" @click="handleCancel" v-text="cancelText" />
        <div class="submit-btn" @click="handleSubmit" v-text="submitText" />
        <div class="v-picker__header__title">
          <slot name="title" />
        </div>
      </slot>
    </div>
    <div class="v-picker__wrap">
      <PickerCore
        :list="list"
        :value-data.sync="valueData"
        :label-name="labelName"
        :value-name="valueName"
        :child-name="childName"
      />
    </div>
  </VDrawer>
</template>

<script>
import '../../theme/picker.scss'
import { isArray } from '../../utils/types'
import VDrawer from '../drawer/drawer'
import PickerCore from './pickerCore'
import PropsMixin from './props'

export default {
  name: 'VPicker',
  components: {
    VDrawer,
    PickerCore
  },
  mixins: [PropsMixin],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '60%'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    submitText: {
      type: String,
      default: '确认'
    }
  },
  data() {
    return {
      visible: this.show,
      valueData: isArray(this.value) ? [...this.value] : this.value
    }
  },
  computed: {
    hasHeader() {
      return !!this.$slots.header
    }
  },
  watch: {
    show(val) {
      this.visible = val
    },
    value(val) {
      this.valueData = this.hasHeader ? val : isArray(val) ? [...val] : val
    },
    visible(val) {
      this.$emit('update:show', val)
    },
    valueData(val) {
      if (this.hasHeader) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleCancel() {
      this.visible = false
      this.$emit('cancel')
    },
    handleSubmit() {
      this.visible = false
      this.$emit('input', isArray(this.valueData) ? [...this.valueData] : this.valueData)
      this.$emit('submit')
    }
  }
}
</script>
