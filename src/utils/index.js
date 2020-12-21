import { isEmpty, isNumber } from 'lodash'
export const isRequired = function(value) {
  return value !== true && !isNumber(value) && isEmpty(value)
}

export const getKeys = function(key) {
  let path = key.replace(/\[(\w+)\]/g, '.$1')
      path = path.replace(/^\./, '')
  const keyArr = path.split('.')
  return keyArr
}

export const getValueByKey = function(key, modelRef) {
  let val = modelRef
  if(key) {
    const keyArr = getKeys(key)
    const len = keyArr.length
    let tempObj = modelRef
    keyArr.forEach((k, i) => {
      if(len === (i + 1)) {
        val = tempObj ? tempObj[k] : ''
      } else {
        tempObj[k] = tempObj[k] || {}
        tempObj = tempObj[k]
      }
    })
  }

  return val
}

export const getModelKey = function(key, modelRef) {
  let val = {}
  if(key) {
    const keyArr = getKeys(key)
    const len = keyArr.length
    let tempObj = modelRef
    keyArr.forEach((k, i) => {
      if(len === (i + 1)) {
        val = tempObj
      } else {
        tempObj[k] = tempObj[k] || {}
        tempObj = tempObj[k]
      }
    })
  }

  return val
}

export function downloadFile (href, name) {
  let a = document.createElement('a')

  a.href = href
  a.download = name || ''
  a.target='_blank'
  a.style.display = 'none'

  document.body.appendChild(a)

  a.click()
  document.body.removeChild(a)
}