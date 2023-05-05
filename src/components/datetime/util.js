import { initEmptyArray } from '../../utils/helper'
import FlowManager from './FlowManager'

export function generateDate(year, month, day = '01', hour = '00', minutes = '00', seconds = '00') {
  return new Date(`${year}/${pad(month)}/${pad(day)} ${pad(hour)}:${pad(minutes)}:${pad(seconds)}`)
}

export function parseDateProps(time) {
  if (!time) {
    return null
  }
  const date = adjustDate(time)

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
}

export function adjustDate(time) {
  if (!time) {
    return null
  }
  if (/^\d+$/.test(time)) {
    if (time.toString().length === 10) {
      return new Date(time * 1000)
    }
    return new Date(+time)
  }
  let result = new Date(time)
  if (result.toString() === 'Invalid Date') {
    result = new Date(time.replace(/-/g, '/'))
  }
  return result
}

export function monthDays(year, month) {
  const first = generateDate(year, month).getDay()
  const length = new Date(year, month, 0).getDate()
  // 这里默认日历是从星期一开始，返回值是 0（周日）到 6（周六）之间的一个整数
  const before = initEmptyArray(first === 0 ? 6 : first - 1, null)
  const after = initEmptyArray(length, 0).map((_, index) => index + 1)

  return before.concat(after)
}

export function monthDayIsDisabled(minDate, maxDate, year, month, day) {
  if (!minDate && !maxDate) {
    return false
  }

  const current = generateDate(year, month, day)

  if (maxDate) {
    const max = adjustDate(maxDate)
    if (max.getTime() < current.getTime()) {
      return true
    }
  }

  if (minDate) {
    const min = adjustDate(minDate)
    if (min.getTime() > current.getTime()) {
      return true
    }
  }

  return false
}

export function monthIsDisabled(minDate, maxDate, year, month) {
  if (!minDate && !maxDate) {
    return false
  }

  if (maxDate) {
    const max = adjustDate(maxDate)
    if (max.getFullYear() < year || (max.getFullYear() === year && max.getMonth() + 1 < month)) {
      return true
    }
  }

  if (minDate) {
    const min = adjustDate(minDate)
    if (min.getFullYear() > year || (min.getFullYear() === year && min.getMonth() + 1 >= month)) {
      return true
    }
  }

  return false
}

export function yearIsDisabled(minDate, maxDate, year) {
  if (!minDate && !maxDate) {
    return false
  }

  if (maxDate) {
    const max = adjustDate(maxDate)
    if (max.getFullYear() < year) {
      return true
    }
  }

  if (minDate) {
    const min = adjustDate(minDate)
    if (min.getFullYear() > year) {
      return true
    }
  }

  return false
}

export function timeComponentIsDisabled(min, max, component) {
  return !!((min && component < min) || (max && component > max))
}

export function weekdays() {
  return ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
}

export function months() {
  return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
}

export function hours(step = 1) {
  return Array.apply(null, Array(Math.ceil(24 / step))).map((item, index) => index * step)
}

export function minutes(step = 1) {
  return Array.apply(null, Array(Math.ceil(60 / step))).map((item, index) => index * step)
}

export function years(current) {
  return Array.apply(null, Array(201)).map((item, index) => current - 100 + index)
}

export function pad(number) {
  return number < 10 ? '0' + number : number
}

export function createFlowManagerFromType(type) {
  let flow = []

  switch (type) {
    case 'datetime':
      flow = ['date', 'time']
      break
    case 'time':
      flow = ['time']
      break
    default:
      flow = ['date']
  }

  return new FlowManager(flow, 'end')
}
