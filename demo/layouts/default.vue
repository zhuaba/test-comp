<style lang="scss">
#__nuxt {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  padding-top: 25px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

#app {
  > .header-shim {
    position: relative;
    height: 44px;
  }

  > .title {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 69px;
    line-height: 44px;
    font-size: 20px;
    font-weight: 500;
    padding: 25px 20px 0;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    z-index: 999;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -5px;
      height: 5px;
      background-position: left 0 top -2px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);
      background-repeat: repeat-x;
    }

    .back {
      color: #000;
      position: relative;
      width: 30px;
      height: 30px;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 10px;
        height: 10px;
        border-top: solid 2px #000;
        border-right: solid 2px #000;
        transform: rotate(-135deg);
      }

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 2px;
        width: 15px;
        background-color: #000;
      }

      & + .text {
        padding-right: 30px;
      }
    }

    .text {
      flex: 1;
    }

    &.ios {
      text-align: center;
      font-size: 17px;
      font-weight: 600;
      border-bottom: 1px solid #ebedf0;

      &:after {
        content: none;
      }

      .text {
        text-align: center;
      }
    }

    .qr {
      color: #000;
      position: absolute;
      margin-left: 2px;
      margin-top: 2px;
      width: 17px;
      height: 17px;
      border-radius: 1px;
      border: solid 1px #000;
      right: 26px;
      top: 38px;

      &:before {
        content: '';
        position: absolute;
        left: 3px;
        top: -2px;
        width: 9px;
        height: 19px;
        color: white;
        background-color: #fff;
        transform-origin: center;
      }

      &:after {
        content: '';
        position: absolute;
        left: 3px;
        top: -2px;
        width: 9px;
        height: 19px;
        color: white;
        background-color: #fff;
        transform-origin: center;
        transform: rotate(90deg);
      }

      .qrcode {
        position: absolute;
        top: 100%;
        right: 100%;
        border: 1px solid #ddd;
        border-radius: 5px;
        z-index: 1;
      }
    }
  }

  > .main-view {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 69px;
    overflow-y: auto;
    @include night() {
      background-color: #0c0c0c;
    }
  }

  &.night {
    background-color: #0c0c0c;

    .title {
      color: #e1e1e1;
      background-color: #1b1b1b;
      border-bottom-color: #333333;

      .qr {
        border-color: #e1e1e1;

        &:before,
        &:after {
          background-color: #1b1b1b;
        }
      }
    }
  }
}

body {
  margin: 0;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .container {
    padding: 20px;

    .v-collapse {
      &-header {
        font-weight: 500;
        font-size: 16px;
        line-height: 40px;
        border-radius: 2px;
        padding: 10px 16px;
      }

      &-item {
        margin-bottom: 16px;
        overflow: hidden;
        border-radius: 6px;
        box-shadow: 0 1px 5px #ebedf0;
      }
    }
  }
}
</style>

<template>
  <div id="app" :class="{ night: isNight }" @click="showQR = false">
    <client-only>
      <template v-if="showTitle">
        <header :class="{ ios: $ios }" class="title">
          <div v-if="showBack" class="back" @click="back" />
          <span class="text" v-text="title" />
          <div class="qr" @click.stop="showQR = !showQR">
            <canvas v-show="showQR" ref="qrcode" class="qrcode" />
          </div>
        </header>
        <div class="header-shim" />
      </template>
    </client-only>
    <div class="main-view">
      <nuxt />
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'Layout',
  data() {
    return {
      showQR: false,
      title: ''
    }
  },
  computed: {
    showTitle() {
      return this.$route.name !== 'index' && this.$route.query.from === 'doc'
    },
    showBack() {
      return this.$route.path.split('/').length > 2
    },
    isNight() {
      return this.$route.query.night === '1'
    }
  },
  mounted() {
    this.generateQR()
    this.initNightMode()
    this.$watch('$route', () => {
      this.generateQR()
    })
    document.addEventListener('touchstart', function () {}, false)
  },
  methods: {
    back() {
      this.$router.back()
    },
    initNightMode() {
      if (this.isNight) {
        document.querySelector('html').classList.add('night-mode')
      }
    },
    generateQR(loop = 0) {
      this.$meta().refresh()
      this.title = typeof window === 'undefined' ? '' : document.title
      this.$nextTick(() => {
        if (!this.$refs.qrcode) {
          if (loop > 5) {
            return
          }
          setTimeout(() => {
            this.generateQR(loop + 1)
          }, 1000)
          return
        }
        QRCode.toCanvas(
          this.$refs.qrcode,
          `${window.location.origin}${window.location.pathname}?ios=${this.$sakura.md ? 0 : 1}`,
          {
            width: 250
          }
        )
      })
    }
  }
}
</script>
