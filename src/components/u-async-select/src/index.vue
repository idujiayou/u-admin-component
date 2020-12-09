<template>
  <div class="u-async-select">
    <a-popover 
      placement="topLeft" 
      trigger="click">
      <template #content>
        <u-table 
          size="small" 
          :loading="loading"
          :row-selection="rowSelection" 
          :columns="columns2" 
          :data-source="data" 
          :scroll="{
            y: 200,
            x: 500
          }"
          :pagination="pagination"/>
      </template>
      <a-input
        />
    </a-popover>
  </div>
</template>
<script>
import uTable from '@/components/u-table/src'
import requestUse from '@/use/request'
import { inject, computed } from 'vue'

export default {
  name: 'uAsyncSelect',
  props: {
    columns: Array,
    request: Function,
    params: Object,
    mode: String
  },
  setup(props) {
    
    const { asyncSelect: asyncSelectConfig } = inject('uConfig')
    const getModeConfig = function() {
      let {columns, mode} = props
          
      if(mode && asyncSelectConfig && asyncSelectConfig.mode && asyncSelectConfig.mode[mode]) {
        return asyncSelectConfig.mode[mode] || {}
      }
      return {}
    }
    const config = computed(() => {
      return getModeConfig()
    })
    const columns2 = computed(() => {
      let {columns} = props
      return columns || (config.value.columns || asyncSelectConfig.defaultColumns)
    })
    const request2 = computed(() => {
      let {request} = props
      return request || config.value.request
    })

    const {requestRows: requestRowsFn} = requestUse(request2.value)

    return {
      requestRowsFn,
      asyncSelectConfig,
      getModeConfig,
      columns2,
      config,
      request2
    }
  },
  components: {
    uTable
  },
  data() {
    return {
      data: [],
      visible: false,
      loading: false,
      pagination: {
        total: 0,
        pageSize: 10,
        current: 1,
        onChange: (page) => {
          this.pagination.current = page

          this.load()
        },
        onShowSizeChange: (current, size) => {
          this.pagination.current = current
          this.pagination.pageSize = size
          this.load()
        }
      }
    }
  },
  computed: {
    rowSelection() {
      return {}
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      let { requestRowsFn, pagination } = this
      let pageQuery = {
        page: pagination.current,
        pageSize: pagination.pageSize
      }
      this.loading = true
      requestRowsFn({
        ...pageQuery
      }).then( ({data, total}) => {
        this.data = data
        this.pagination.total = total
        this.loading = false
      }).catch(err => {
        this.loading = false
      })
    }
  }
}
</script>

