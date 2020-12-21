<template>
  <div>
    <u-table v-bind="props" @refresh="loadPage">
      <template #name="{ text }">
        <a>{{ text }} xxx</a>
      </template>
    </u-table>
  </div>
</template>
<script>
import tableUse from 'u-admin-component/src/use/table'
import { computed, inject } from 'vue'
import requestUse from 'u-admin-component/src/use/request'
import uConfig from 'u-admin-component/src/config'
import uniKeyUse from './use/uniKeyUse'
export default {
  name: 'u-table-form',
  props: {
    formKey: String,
    request: Function,
    params: Object,
    rowKey: {
      type: String,
      default: 'id'
    },
  },
  setup(props) {
    const {requestRows: requestRowsFn} = requestUse(props.request)
    const { table: tableConfig} = inject('uConfig') || uConfig
    const {
      uniKey
    } = uniKeyUse()
    return {
      ...tableUse(requestRowsFn, props.rowKey),
      tableConfig,
      uniKey
    }
  },
  computed: {
    props() {
      let { $attrs, tableData, pagination, tableConfig } = this

      let columns = $attrs.columns || []
      let obj = {
        dataSource: $attrs.dataSource,
        ...tableConfig,
        rowKey: $attrs.rowKey || tableConfig.rowKey || 'id'
      }

      if(this.request) {
        obj.dataSource = tableData
        obj.pagination = pagination
      }

      columns.forEach(item => {
        if(item.form) {
          item.slots = obj.slots || { customRender: item.dataIndex || item.key }
          item.form.formKey = this.formKey
        }
      })

      return {
        ...$attrs,
        ...obj
      }
    }
  },
  watch: {
    tableData(val) {
      this.$emit('data-change', val)
    }
  },
  created() {
    this.pageParams = {
      ...this.params
    }
  },
  mounted() {
    if(this.request) {
      this.loadPage()
    }
  },
  methods: {
    
  }
}
</script>
