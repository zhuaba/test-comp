import { clearBodyLocks, unlock, lock } from '../utils/scroll-lock'
import overlay from '../prototypes/overlay'

export default {
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    lock: {
      type: Boolean,
      default: true
    },
    maskClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      rendered: false,
      opening: false,
      closing: false,
      showBox: false,
      overlayId: ''
    }
  },
  watch: {
    showBox(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    open() {
      const action = () => {
        if (this.opening) {
          return
        }

        this.closing = false
        this.opening = true
        this.showBox = true

        if (!this.overlayId) {
          this.overlayId = overlay.show(this.overlayOpts || {})
        }

        setTimeout(() => {
          this.opening = false
        }, this.openTimer || 400)
      }

      if (!this.rendered) {
        this.rendered = true
        this.$nextTick(() => {
          action()
        })
      } else {
        action()
      }
    },
    close() {
      if (this.closing) {
        return
      }

      this.opening = false
      this.closing = true
      this.showBox = false

      overlay.hide(this.overlayId, this.overlayOpts)
      this.overlayId = ''

      setTimeout(() => {
        this.closing = false
      }, this.closeTimer || 400)
    },
    scrollable(el) {
      if (this.lock) {
        unlock(this.overlayOpts.unlock)
      }
      lock(el)
    },
    clearLock(el) {
      el ? unlock(el) : clearBodyLocks()
    }
  },
  beforeDestroy() {
    clearBodyLocks()
    this.close()
  }
}
