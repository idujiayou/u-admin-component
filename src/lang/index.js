import zhLocale from './zh_CN'
import antZhCN from 'ant-design-vue/es/locale/zh_CN'
import { isPlainObject } from 'lodash'
const messages = {
  zhCN: {
    ...antZhCN,
    ...zhLocale
  }
}

export const locale = messages

export function getLanguage(messages) {
  const chooseLanguage = localStorage.getItem('language')
  if (chooseLanguage) return chooseLanguage

  const language = (navigator.language || navigator.browserLanguage).replaceAll('-', '')
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zhCN'
}

export function getPathKeys(key) {
  let path = key.replace(/\[(\w+)\]/g, '.$1')
      path = path.replace(/^\./, '')
  const keyArr = path.split('.')
  return keyArr
}

export function getLocaleValue(obj, path) {
  const empty = path
  
  if(!isPlainObject(obj)) {
    return empty
  }

  const paths = getPathKeys(path)
  const len = paths.length
  if (len) {
    let last = obj
    let i = 0
    while (i < len) {
      const value = last[paths[i]]
      if (value === undefined) {
        return empty
      }
      last = value
      i++
    }
    return last
  } else {
    return empty
  }
}