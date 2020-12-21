<template>
  <div class="u-table">
    <a-table 
      v-bind="opts">
      <template 
        v-for="col in columnsTpl" 
        #[col.dataIndex]="data" 
        :key="col.dataIndex">
      <div :key="col.dataIndex">
        <u-form-item
          v-if="col.form"
          v-bind="getProps(data, col.form)"/>
        <template v-else>
          {{ data.text }}
        </template>
      </div>
    </template>

     </a-table> 
  </div>
</template>
<script>
import localeUse from 'u-admin-component/src/use/locale'
import { SyncOutlined } from '@ant-design/icons-vue'
import { isPlainObject, isArray, forIn } from 'lodash'
export default {
  name: 'uTable',
  comments: {
    SyncOutlined
  },
  setup() {
    const { translate } = localeUse()

    return {
      translate
    }
  },
  data() {
    return {
      pagination: {
        pageSize: 10,
        showSizeChanger: true,
        itemRender: ({page, type, originalElement}) => {
          return type === 'next' ?  (
            <div style="position: relative;"> 
              { originalElement } 
              <div class="ant-pagination-item-link ant-pagination-item-refresh" onClick={(evt) => this.refresh(evt)} title={this.translate('uTable.refresh')}>
                <SyncOutlined />
              </div> 
            </div>
            ) : originalElement
        }
      }
    }
  },
  computed: {
    columnsTpl() {
      let {opts} = this
      let columns = opts.columns || []
      return columns.filter(v => v.slots && v.slots.customRender)
    },
    opts() {
      let {$attrs, pagination2} = this

      return {
        ...$attrs,
        rowKey: $attrs.rowKey || 'id',
        pagination: pagination2
      }
    },
    pagination2() {
      let {pagination, $attrs} = this
      return {
        ...pagination,
        ...$attrs.pagination
      }
    }
  },
  methods: {
    refresh(evt) {
      evt.stopPropagation()
      this.$emit('refresh')
    },
    setkeyByParent(formKey, key, index) {
      return (formKey ? (formKey + '.') : '') + index + '.' + key
    },
    getProps({text, record, index}, form) {
      let selectedKey = form.selectedKey
      let obj = {
        ...form,
        key: this.setkeyByParent(form.formKey, form.key, index)
      }

      if(selectedKey) {
        if(isPlainObject(selectedKey)) {
          let o = {}
          forIn(selectedKey, (value, key) => {
            o[key] = this.setkeyByParent(form.formKey, value, index)
          })
          selectedKey = o
        } else {
          selectedKey = this.setkeyByParent(form.formKey, form.selectedKey, index)
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
              arr.push(this.setkeyByParent(form.formKey, item, index))
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
      return props
    }
  }
}
</script>
