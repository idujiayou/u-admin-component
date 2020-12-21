<template>
  <a-button
    v-bind="$attrs"
    @click="btnClick"
    :loading="loading">
    <slot v-bind="{loading}">
      {{loading ? translate('uExportBtn.loading') : (text || translate('uExportBtn.text')) }}
    </slot>
  </a-button>
</template>
<script>
import localeUse from 'u-admin-component/src/use/locale'
import requestUse from 'u-admin-component/src/use/request'
import {downloadFile} from 'u-admin-component/src/utils'

export default {
  name: 'u-export-btn',
  props: {
    fileName: String,
    // 导出地址
    request: Function,
    query: Object,
    text: String,
    beforeSubmit: Function
  },
  setup(props) {
    const { translate } = localeUse()
    const { request: requestFn } = requestUse(props.request)

    return {
      translate,
      requestFn
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    btnClick() {
      let { requestFn, query, beforeSubmit, fileName, translate, request } = this
      if(!request || this.loading) return
      this.loading = true
      if(typeof beforeSubmit === 'function' && !beforeSubmit()) return
      requestFn(query).then(ret => {
        downloadFile(ret.data.url, fileName || '')
        this.loading = false
        this.$message.success(translate('uExportBtn.success'))
      })
    }
  }
}
</script>

