import { inject } from 'vue'
import { getLocaleValue } from '@/lang/index'
export default function() {
  const { locale } = inject('configProvider')

  const translate = function(key) {
    return getLocaleValue(locale, key)
  }

  return {
    locale,
    translate
  }
}