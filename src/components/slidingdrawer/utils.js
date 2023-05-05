export const dragDown = (ev, moveCb, offset, min, max) =>
  new Promise((resolve) => {
    const X = ev.touches[0].pageX
    const Y = ev.touches[0].pageY
    const moveFn = (ev) => {
      // ev.preventDefault()
      const x = ev.touches[0].pageX + (offset ? parseInt(offset.left) : 0)
      const y = ev.touches[0].pageY + (offset ? parseInt(offset.top) : 0)
      let left = x - X
      let top = y - Y

      if (min) {
        if (min.left >= left) {
          left = min.left
        }

        if (min.top >= top) {
          top = min.top
        }
      }

      if (max) {
        if (max.left <= left) {
          left = max.left
        }

        if (max.top <= top) {
          top = max.top
        }
      }
      moveCb &&
        moveCb({
          left,
          top
        })
    }

    const upFn = (ev) => {
      // ev.preventDefault()
      const x = ev.changedTouches[0].pageX
      const y = ev.changedTouches[0].pageY
      resolve({
        left: x - X,
        top: y - Y
      })
      document.removeEventListener('touchmove', moveFn, { passive: true })
      document.removeEventListener('touchend', upFn, { passive: true })
    }

    document.addEventListener('touchmove', moveFn, { passive: true })
    document.addEventListener('touchend', upFn, { passive: true })
  })
