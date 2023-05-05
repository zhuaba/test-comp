import { isArray } from '~/src/utils/types'

export const computeArrayDeep = (arr, key, base = 1) => {
  const result = arr.map((obj) => {
    if (obj && obj[key] && isArray(obj[key]) && obj[key].length) {
      return computeArrayDeep(obj[key], key, base + 1)
    }
    return base
  })
  return Math.max(...result)
}

export const getArrayFirstValue = (arr, valueKey, childKey, result, base = 0) => {
  result[base] = arr[0][valueKey]
  if (arr[0][childKey] && isArray(arr[0][childKey]) && arr[0][childKey].length) {
    getArrayFirstValue(arr[0][childKey], valueKey, childKey, result, base + 1)
  }
  return result
}

export const getChildrenById = (arr, id, valueName, childName) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][valueName] === id) {
      result = arr[i][childName] || []
      break
    }
  }
  return result
}

export const findObjAtArrIndex = (arr, valueName, id) => {
  let result = 0
  if (!id) {
    return result
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][valueName] === id) {
      result = i
      break
    }
  }
  return result
}

export const is2dArray = (arr) => {
  return isArray(arr) && arr[0] && isArray(arr[0])
}
