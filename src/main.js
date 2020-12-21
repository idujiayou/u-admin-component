import { createApp } from 'vue'
import uAdmin from './index'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import { locale, getLanguage, getLocaleValue } from 'u-admin-component/src/lang/index'
import 'default-passive-events'

const app = createApp(App)
const components = [
  Antd,
  store,
  router,
  uAdmin
]

components.forEach(item => {
  app.use(item)
})

app.config.productionTip = false
app.use({
  install(app){
    const curLocale = locale[getLanguage(locale)] || {}
    app.provide('locale', curLocale)
    app.config.globalProperties.$t = function(key) {
      return getLocaleValue(curLocale, key)
    }
  }
}).mount('#app')
