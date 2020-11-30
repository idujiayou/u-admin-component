
import { locale, getLanguage, getLocaleValue } from '@/lang/index'
const lang = locale[getLanguage(locale)] || {}

export const isPassword = async (rule, value) => {
  if (value === '') {
    return Promise.reject(getLocaleValue(lang, 'UValidator.isPassword'))
  } else {
    return Promise.resolve()
  }
}

isPassword.message = getLocaleValue(lang, 'UValidator.isPassword')