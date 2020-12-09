import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import uForm from '@/components/u-form'
import uDialog from '@/components/u-dialog'
import { locale, getLanguage, getLocaleValue } from '@/lang/index'
import 'default-passive-events'
import uUpload from '@/components/u-upload'
import uEditor from '@/components/u-editor'
import uAsyncSelect from '@/components/u-async-select'
import uSearchBtn from '@/components/u-search-btn'
import uSearchBar from '@/components/u-search-bar'
import uExportBtn from '@/components/u-export-btn'
import uFormBtn from '@/components/u-form-btn'
const app = createApp(App)
const components = [
  Antd,
  store,
  router,
  uUpload, 
  uEditor, 
  uAsyncSelect,
  uForm,
  uDialog,
  uSearchBtn,
  uSearchBar,
  uExportBtn,
  uFormBtn
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
