<template>
  <div>
    <u-table v-bind="props" @refresh="loadPage"></u-table>
  </div>
</template>
<script>
import { isPlainObject, isArray, forIn } from 'lodash'
import tableUse from '@/use/table'
import { computed, inject } from 'vue'
import requestUse from '@/use/request'
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
    const { table: tableConfig} = inject('uConfig')
    return {
      ...tableUse(requestRowsFn, props.rowKey),
      tableConfig
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
        if(!item.customRender && item.form) {
          item.customRender = (data) => {
            return this.customRender(data, item.form)
          }
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
      this.$emit('change', val)
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
    setkeyByParent(key, index) {
      return this.formKey + '.' + index + '.' + key
    },
    customRender({text, record, index}, form) {
      let selectedKey = form.selectedKey
      let obj = {
        ...form,
        key: this.setkeyByParent(form.key, index)
      }

      if(selectedKey) {
        if(isPlainObject(selectedKey)) {
          let o = {}
          forIn(selectedKey, (value, key) => {
            o[key] = this.setkeyByParent(value, index)
          })
          selectedKey = o
        } else {
          selectedKey = this.setkeyByParent(form.selectedKey, index)
        }

        obj.selectedKey = selectedKey
      }

      
      let relation = form.relation

      if(relation) {
        if(isPlainObject(relation)) {
          let key = relation.key
          let arr = []
          if(isArray(key)) {
            key.forEach(item => {
              arr.push(this.setkeyByParent(item, index))
            })
          } else {
            arr.push(key)
          }
          
          relation = {
            ...relation,
            key: arr
          }
        }
        obj.relation = relation
      }
      let props = {
        item: obj
      }
      return (
        <u-form-item {...props} />
      )
    }
  }
}
</script>
