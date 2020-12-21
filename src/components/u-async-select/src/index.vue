<template>
  <div class="u-async-select">
    <a-popover 
      v-model:visible="visible"
      placement="topLeft" 
      ref="popover"
      trigger="click">
      <template #content>
        <div v-show="showTags" class="u-async-select-show-tags">
          <a-tag v-for="(tag, index) in selectedRows" :key="tag[rowKey]" closable @close="handleClose(index)">
            {{ tag[showKey] }}
          </a-tag>
          <a-tag class="u-async-select-show-tags" color="error" @click="clearTags" style="cursor: pointer;">清空</a-tag>
        </div>
        <u-table 
          v-show="!showTags"
          ref="table"
          style="margin-top: 8px;"
          size="small" 
          :loading="pageLoading"
          :row-selection="{ 
            selectedRowKeys: selectedRowKeys, 
            onChange: onSelectChange,
            type: multiple ? 'checkbox' : 'radio'
          }" 
          :rowKey="rowKey"
          :columns="columns2" 
          :data-source="tableData" 
          @refresh="loadPage"
          :scroll="{
            y: 200,
            x: 500
          }"
          :pagination="pagination"/>
      </template>
      <div class="u-async-select-input" @click="stopPropagation">
        <div ref="showTags" v-if="firstTag" class="u-show-tags">
          <a-tag  visible closable @close="handleClose(0)" @click="firstTag && tagClick($event)" style="cursor: pointer;">
            {{ firstTag && firstTag[showKey] }}
          </a-tag>
        </div>
        <a-tag v-if="selectedRows.length > 1" @click="numClick" style="cursor: pointer;margin-right: 0;">
          +{{selectedRows.length - 1}}
        </a-tag>
        <a-input 
          @click="stopPropagation"
          @focus="onFocus" 
          @blur="onBlur"
          v-model:value="pageParams[keywordKey]"
          @change="onChange"/>
      </div>
    </a-popover>
  </div>
</template>
<script>
import uTable from 'u-admin-component/src/components/u-table/src'
import requestUse from 'u-admin-component/src/use/request'
import { inject, computed } from 'vue'
import tableUse from 'u-admin-component/src/use/table'
import { isBoolean, isArray, isEqualWith, forEach } from 'lodash';
import uConfig from 'u-admin-component/src/config'

export default {
  name: 'uAsyncSelect',
  props: {
    columns: Array,
    request: Function,
    params: Object,
    mode: String,
    rowKey: {
      type: String,
      default: 'id'
    },
    showKey: {
      type: String,
      default: 'name'
    },
    keywordKey: {
      type: String,
      default: 'name'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Array, Number],
    selected: [Array, Object],
    format: {
      type: String,
      default: 'array'
    }
  },
  setup(props) {
    const { asyncSelect: asyncSelectConfig } = inject('uConfig') || uConfig
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
      columns2,
      ...tableUse(requestRowsFn, props.rowKey)
    }
  },
  components: {
    uTable
  },
  data() {
    return {
      isFocus: false,
      visible: false,
      isNumClick: false
    }
  },
  computed: {
    isArrayType() {
      return this.multiple && this.format === 'array'
    },
    firstTag() {
      return this.selectedRows[0] || null
    },
    showTags() {
      return !this.isFocus && this.isNumClick
    }
  },
  created() {
    this.pageParams = {
      ...this.params
    }
  },
  watch: {
    value: {
      handler(val) {
        if(val + '' !== this.selectedRowKeys + '') {
          if(!val || !val.length) {
            this.selectedRows = []
          }
        }
      }
    },
    selectedRowKeys: {
      handler(val) {
        if(!val.length) {
          this.toggle('isNumClick', false)
        }

        if(this.value + '' !== val + '') {
          if(this.isArrayType) {
            this.$emit('update:value', [...val])
            this.$emit('change', [...val])
          } else {
            this.$emit('update:value', val + '')
            this.$emit('change', val + '')
          }
        }
      },
      deep: true
    },
    selected: {
      handler(val) {
        let { selectedRows, isEqualFn } = this
        if(isEqualFn(val, selectedRows)) return

        if(isArray(val)) {
          this.selectedRows = [...val]
        } else {
          this.selectedRows = val ? [val] : []
        }
      },
      immediate: true,
      deep: true
    },
    selectedRows: {
      handler(val) {
        let arr = this.getKeysItem(val)
        let { selected, selectedRowKeys, isEqualFn } = this
        let arr2 = this.getKeysItem(isArray(selected) ? selected : (selected ? [selected] : []))

        if(arr.length !== selectedRowKeys.length || arr + '' !== selectedRowKeys + '') {
          this.selectedRowKeys = arr
        }

        if(!isEqualFn(val, selected)){
          this.$emit('selected-change', [...val])
        }
      },
      immediate: true,
      deep: true
    },
    isFocus(val) {
      let num = val ? 10000 : 0;

     this.$nextTick(() => {
       this.$refs.showTags && (this.$refs.showTags.scrollLeft = num)
     })
    },
    visible(val) {
      if(val && !this.tableData.length) {
        this.loadPage()
      }
    }
  },
  mounted() {
    if(this.visible) {
      this.loadPage()
    }
  },
  methods: {
    isEqualFn(arr1, arr2) {
      let {rowKey} = this
      let len1 = arr1.length
      let len2 = arr2.length
      if( len1 !== len2) {
        return false
      } else if(len1 === 0 && len2 === 0){
        return true
      } else {
        let flag = true
        forEach(arr1, (item, index) => {
          flag = item[rowKey] + '' === arr2[index][rowKey] + ''
          return flag
        })
        return flag
      }

    },
    getKeysItem(val) {
      let arr = []
      val.forEach(item => {
        arr.push(item[this.rowKey])
      })
      return arr
    },
    toggle(key, flag) {
      if(!key) return

      if(isBoolean(flag)) {
        this[key] = flag
      } else {
        this[key] = !this[key]
      }
    },
    tagClick(evt) {
      evt.stopPropagation()
      if(this.isNumClick) {
        this.toggle('visible', true)
      } else {
        this.toggle('visible')
      }
      
      this.toggle('isNumClick', false)
    },
    numClick(evt) {
      evt.stopPropagation()
      this.toggle('visible', true)
      this.isNumClick = true
    },
    handleClose(index) {
      this.selectedRows.splice(index, 1)
      this.selectedRowKeys.splice(index, 1)
    },
    onChange(evt) {
      let val = evt.target.value
      this.loadPage()
    },
    stopPropagation(evt){
      evt.stopPropagation()
    },
    onFocus(evt) {
      evt.stopPropagation()
      this.isFocus = true
      this.toggle('visible', true)
    },
    onBlur() {
      this.isFocus = false
    },
    clearTags() {
      this.selectedRowKeys = []
      this.selectedRows = []
    }
  }
}
</script>

