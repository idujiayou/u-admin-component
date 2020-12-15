
import uForm from '@/components/u-form'
import uFormItem from '@/components/u-form/form-item'
import uDialog from '@/components/u-dialog'
import uUpload from '@/components/u-upload'
import uEditor from '@/components/u-editor'
import uAsyncSelect from '@/components/u-async-select'
import uSearchBtn from '@/components/u-search-btn'
import uSearchBar from '@/components/u-search-bar'
import uExportBtn from '@/components/u-export-btn'
import uFormBtn from '@/components/u-form-btn'
import uTable from '@/components/u-table'
import '@/style/index.less'

const components = [
  uUpload, 
  uEditor, 
  uAsyncSelect,
  uForm,
  uFormItem,
  uDialog,
  uSearchBtn,
  uSearchBar,
  uExportBtn,
  uFormBtn,
  uTable
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  uUpload, 
  uEditor, 
  uAsyncSelect,
  uForm,
  uFormItem,
  uDialog,
  uSearchBtn,
  uSearchBar,
  uExportBtn,
  uFormBtn,
  uTable
};
