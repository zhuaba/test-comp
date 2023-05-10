<style lang="scss">
.phone-wrap {
  position: fixed;
  top: 58px;
  right: 25px;
  width: 384px;
  user-select: none;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  @media (max-width: 1240px) {
    display: none;
  }

  .switcher {
    padding-top: 16px;
    text-align: center;

    .active {
      background-color: #020814;
      color: rgb(255, 255, 255);
    }

    button {
      background-color: transparent;
      color: #73849a;
      cursor: pointer;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.1em;
      line-height: 24px;
      border-radius: 16px;
      margin: 0 3px;
      padding: 0 9px;
      transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
      outline: none;
      border: none;
    }
  }

  .night-mode {
    position: absolute;
    color: #020814;
    margin-left: 6px;
    margin-top: 6px;
    transition: .4s;

    &.light {
      right: 62px;
      top: 18px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 1px solid #020814;
      box-shadow: -8px 0 0 -3px #020814,  8px 0 0 -3px #020814,  0 -8px 0 -3px #020814,  0 8px 0 -3px #020814,  -6px -6px 0 -3px #020814,  -6px 6px 0 -3px #020814,  6px -6px 0 -3px #020814,  6px 6px 0 -3px #020814;
    }

    &.night {
      right: 56px;
      top: 14px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border-top: solid 1px #020814;
      border-bottom: solid 1px #020814;
      border-left: solid 1px #020814;
      border-right: solid 1px transparent;

      &:before {
        content: '';
        position: absolute;
        left: 6px;
        top: 1px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        border-top: solid 1px transparent;
        border-bottom: solid 1px #020814;
        border-left: solid 1px #020814;
        border-right: solid 1px transparent;
      }
    }
  }

  .night-btn {
    position: absolute;
    right: 45px;
    top: 10px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 2;
  }

  .box {
    padding: 32px;

    .figure {
      position: relative;
      box-shadow: rgb(9, 10, 13) 0 0 0 14px, rgb(159, 163, 168) 0 0 0 17px, rgba(0, 0, 0, 0.2) 0 0 34px 17px;
      width: 100%;
      height: 680px;
      z-index: 1;
      margin: 0;
      border-radius: 20px;
      overflow: hidden;

      &.ios {
        border-radius: 32px;

        &:after {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          bottom: 6px;
          content: '';
          height: 4px;
          width: 35%;
          z-index: 1;
          border-radius: 2px;
        }
      }

      .header {
        position: relative;

        .ios-notch {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          fill: rgb(9, 10, 13);
          top: -1px;
          width: 165px;
          z-index: 2;
        }

        .md-bar {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          display: block;
          fill: rgb(9, 10, 13);
          opacity: 0.1;
          z-index: 2;
          padding: 0.5rem 0.75rem;
          box-sizing: border-box;
        }
      }

      .frame-wrap {
        height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        overscroll-behavior: contain;

        iframe {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="phone-wrap">
    <div class="switcher">
      <button :class="{ active: isIOS }" @click="isIOS = true">iOS</button>
      <button :class="{ active: !isIOS }" @click="isIOS = false">Android</button>
    </div>
    <div class="night-mode" :class="[isNight ? 'night' : 'light']" />
    <button class="night-btn" @click="isNight = !isNight" />
    <div class="box">
      <div class="figure" :class="{ 'ios': isIOS }">
        <div class="header">
          <svg v-if="isIOS" class="ios-notch" viewBox="0 0 219 31"><path d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fill-rule="evenodd"></path></svg>
          <svg v-else class="md-bar" viewBox="0 0 1384.3 40.3"><path class="st0" d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"></path><circle class="st0" cx="1299" cy="20.2" r="20"></circle><path class="st0" d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
        </div>
        <div class="frame-wrap">
          <iframe
            :src="url"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowtransparency="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pkg from '../../../package'

export default {
  name: 'Phone',
  props: {
    page: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isIOS: true,
      isNight: false
    }
  },
  computed: {
    url() {
      const isProd = process.env.NODE_ENV === 'production'
      const host = isProd ? pkg.gen_url : `http://${process.env.LOCAL_IP}:9090/`
      return `${host}${this.page}?from=doc&ios=${this.isIOS ? 1 : 0}&night=${this.isNight ? 1 : 0}`
    }
  }
}
</script>

