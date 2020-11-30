import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import uForm from '@/components/u-form'
import { locale, getLanguage, getLocaleValue } from '@/lang/index'
import 'default-passive-events'

const app = createApp(App)
app.use(uForm)
app.config.productionTip = false
app.use(store).use(router).use(Antd).use({
  install(app){
    const curLocale = locale[getLanguage(locale)] || {}
    app.provide('locale', curLocale)
    app.config.globalProperties.$t = function(key) {
      return getLocaleValue(curLocale, key)
    }
  }
}).mount('#app')
