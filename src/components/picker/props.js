export default {
  props: {
    value: {
      type: [String, Number, Array],
      default: () => []
    },
    list: {
      required: true,
      type: Array,
      default: () => []
    },
    labelName: {
      type: String,
      default: 'text'
    },
    valueName: {
      type: String,
      default: 'value'
    },
    childName: {
      type: String,
      default: 'children'
    }
  }
}
