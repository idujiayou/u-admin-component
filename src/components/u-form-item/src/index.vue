<template>
  <a-form-item
    class="u-form-item"
    v-bind="props"
    :name="keyArr"
    :rules="rules">

    <template v-slot:label>
      <div 
        v-if="item.label" 
        :style="{width: labelWidth}" 
        class="u-form-item-label" 
        :class="{'ant-form-item-required': isRequired}">
        <uRender :render="item.label" :data="modelRef"></uRender>
      </div>
      <formPopover 
        v-if="item.label"
        :rules="rulesFilter"
        :tips="item.tips"
        :tipsTitle="item.tipsTitle">
      </formPopover>
    </template>
    <uRender v-if="item.renderFormItem" :render="item.renderFormItem" :data="modelRef"></uRender>
    <div v-else-if="isType('show')">
      {{ model }}
    </div>
    <a-textarea 
      v-else-if="isType('textarea')" 
      v-bind="itemProps"
      :value="model" 
      @change="inputChange($event)" />
    <a-input-number
      v-else-if="isType('inputNumber')" 
      v-bind="itemProps"
      :value="model" 
      @change="inputChange($event)" />
    <a-date-picker 
      v-else-if="isType('datePicker')" 
      v-bind="itemProps"
      :valueFormat="item.props && item.props.valueFormat ? item.props.valueFormat : 'YYYY-MM-DD'"
      :value="model" 
      @change="dateChange" />
    <a-month-picker 
      v-else-if="isType('monthPicker')" 
      v-bind="itemProps"
      :valueFormat="item.props && item.props.valueFormat ? item.props.valueFormat : 'YYYY-MM'"
      :value="model" 
      @change="dateChange" />
    <a-range-picker 
      v-else-if="isType('rangePicker')" 
      v-bind="itemProps"
      :valueFormat="item.props && item.props.valueFormat ? item.props.valueFormat : 'YYYY-MM-DD'"
      :value="model" 
      @change="dateChange" />
    <a-week-picker 
      v-else-if="isType('weekPicker')" 
      v-bind="itemProps"
      :valueFormat="item.props && item.props.valueFormat ? item.props.valueFormat : 'YYYY-w'"
      :value="model" 
      @change="dateChange" />
    <a-cascader
      v-else-if="isType('cascader')" 
      v-bind="itemProps"
      :value="model" 
      @change="cascaderChange" 
    />
    <a-checkbox 
      v-else-if="isType('checkbox')"
      v-bind="itemProps"
      :checked="model"
      @change="checkboxChange($event)">
      <uRender v-if="item.text" :render="item.text" :data="modelRef"></uRender>
    </a-checkbox>
    <a-switch 
      v-else-if="isType('switch')"
      v-bind="itemProps"
      :checked="model"
      @change="checkboxChange($event)"/>
    <a-checkbox-group
      v-else-if="isType('checkboxGroup')" 
      v-bind="itemProps"
      :value="model" 
      @change="inputChange($event)"/>
    <a-radio-group
      v-else-if="isType('radioGroup')" 
      v-bind="itemProps"
      :value="model" 
      @change="inputChange($event)"/>
    <a-select
      v-else-if="isType('select')" 
      v-bind="itemProps"
      :value="model" 
      @change="inputChange($event)"/>
    <u-upload 
      ref="upload" 
      v-else-if="isType('upload')" 
      :value="model"
      v-bind="itemProps"
      @upload-change="uploadChange($event)"/>
    <u-editor 
      :value="model"
      v-bind="itemProps"
      v-else-if="isType('editor')" 
      @change="inputChange($event)"/>
    <uAsyncSelect 
      v-else-if="isType('asyncSelect')" 
      :value="model"
      :selected="uSelected"
      @change="inputChange($event)"
      @selected-change="selectedChange"
      v-bind="itemProps"/>
    <a-input 
      v-else 
      :disabled="true"
      v-bind="itemProps"
      :value="model" 
      @change="inputChange($event)"/>
  </a-form-item>
</template>
<script>
import { inject, watch } from 'vue'
import uRender from 'u-admin-component/src/components/u-render'
import formPopover from 'u-admin-component/src/components/u-form/src/popover'
import localeUse from 'u-admin-component/src/use/locale'
import { isArray, isUndefined, isFunction, isObject, isString, isNumber, isEmpty, isPlainObject, forIn } from 'lodash'
import { isRequired } from 'u-admin-component/src/utils'
import { getAsyncSelectKey } from 'u-admin-component/src/components/u-form/src/utils'

export default {
  name: 'u-form-item',
  props: {
    item: Object,
    hideRequiredMark: Boolean,
    labelWidth: String
  },
  components: {
    uRender,
    formPopover
  },
  setup() {
    const modelRef = inject('modelRef')
    const validateInfos = inject('validateInfos')
    const rulesRef = inject('rulesRef')
    const setRules = inject('setRules')
    const { translate } = localeUse()
    const {set: setModel, get: getCurModel, getKeys} = inject('modelRefFn')

    return {
      modelRef,
      validateInfos,
      rulesRef,
      setRules,
      translate,
      setModel,
      getCurModel,
      getKeys
    }
  },
  watch: {
    model: {
      handler(val, old) {
        let { item, modelRef, key, isArrayType } = this
        
        if(isArrayType) {
          let cur = this.getCurModel(key) || []
          if(this.isformatString(cur)) {
            cur = cur.split(',')
          }
          if(cur + '' !== val + '') {
            if(this.item.format === 'string') {
              this.setModel(key, val ? val + '' : val)
            } else {
              this.setModel(key, val)
            }
          }
        }

        if(isFunction(item.onChange)) {
          item.onChange(modelRef)
        }

        if(item.relation) {
          let arr = this.getStrArr(item.relation)
          this.relationFn(arr, val)
        }
      }
    }
  },
  computed: {
    uSelected() {
      let {isType, item, key, selectedKey, itemProps} = this
      if(isType('asyncSelect')) {
        if(isPlainObject(item.selectedKey)) {
          let obj = {}
          let flag = true
          forIn(item.selectedKey, (val, key) => {
            let val1 = this.getCurModel(val)
            let rowKey = itemProps.rowKey || 'id'

            if(rowKey === key && isRequired(val1)) {
              flag = false
              return false
            }
            obj[key] = this.getCurModel(val)
          })

          return flag ? [obj] : []
        }
        return this.getCurModel(selectedKey) || []
      }
      return []
    },
    selectedKey() {
      let {item, key} = this
      return getAsyncSelectKey(item.type, key, item.selectedKey)
    },
    itemProps() {
      let {item, translate, isType} = this
      let props = item.props || {}
      
      if(isType(['select', 'cascader'])) {
        props.placeholder = props.placeholder || translate('uForm.selectPlaceholder')
      }
      return {
        ...props,
        disabled: isUndefined(props.disabled) ? false : this.disabledFn(props.disabled)
      }
    },
    props() {
      let { item, validateInfos } = this
      let props = item ? (item.formItemProps || {}) : {}
      return {
        ...props,
        //...validateInfos[item.key]
      }
    },
    rules() {
      let { item, rulesRef, key, isType, translate, setRules } = this

      let arr = key ? (rulesRef[key] ? [...rulesRef[key]] : []) : []

      if(!rulesRef[key] && item.rules) {
        let arrR = setRules(item.rules)
        if(arrR && arrR.length) {
          arr = arrR
        }
      }
      
      if(isType('upload')) {
        let msg = translate('uUpload.validator.uploading') 
        arr.push({
          _type: 'upload',
          message: msg,
          trigger: 'change',
          validator: (rule, value) => {
            let $upload = this.$refs.upload
            if($upload) {
              let isDone = $upload.isDone()
              if(isDone) {
                return Promise.resolve()
              } else {
                return Promise.reject(msg)
              }
            }
            return Promise.resolve()
          }
        })
      }
      
      return arr
    },
    isRequired() {
      let { item, hideRequiredMark, modelRef } = this
      let rules = item.rules || []
      if(isFunction(rules)) {
        rules = rules(modelRef)
      }
      return !hideRequiredMark && rules.includes('required')
    },
    rulesFilter() {
      let {rules} = this
      let arr = rules.filter(item => {
        return !['upload'].includes(item._type) && item.message
      })

      return arr
    },
    key() {
      return this.item.key || ''
    },
    keyArr() {
      let {key} = this
      if(key) {
        let arr = key.split('.')
        if(arr.length > 1) {
          return arr
        }
      }
      return key
    },
    isArrayType() {
      let { item, isType } = this
      let props = item.props || {}
      let mode = props.mode || ''
      let isSelect = (isType(['select']) && ['multiple', 'tags'].includes(mode)) 
      let isUpload = (isType(['upload']) && (item.props && item.props.limit || Infinity) > 1) 
      let isAsyncSelect = (isType(['asyncSelect'])) && (item.props && item.props.multiple) 
      return isAsyncSelect || isUpload || isSelect || isType(['rangePicker', 'cascader', 'checkboxGroup'])
    },
    //当前数据
    model() {
      let {key, item, isArrayType} = this
      let val = ''
      let keys = item.keys
      if(isArrayType) {
        let cur = this.getCurModel(key)
        
        if(isArray(keys)) {
          let arr = []
          keys.forEach(k => {
            arr.push(this.getCurModel(k))
          })

          val = arr[0] ? arr : []
          
        } else {
          val = this.isformatString(cur) ? cur.split(',') : (cur || [])
        }
      } else {
        
        val = this.getCurModel(key)
        if(this.isType(['checkbox', 'switch'])) {
          val = val === '1'
        }
      }

      return val === '' ? null : val
    }
  },
  methods: {
    selectedChange(data) {
      if(this.selectedKey) {
        let {item} = this
        if(isPlainObject(item.selectedKey)) {
          forIn(item.selectedKey, (val, key) => {
            let val1 = data && data[0] ? (data[0][key] || '') : ''
            this.setModel(val, val1)
          })
          // this.setModel(this.selectedKey, data)
          return
        }
        this.setModel(this.selectedKey, data)
      }
    },
    isformatString(cur) {
      return (cur && this.item.format === 'string' && isString(cur))
    },
    isEmpty(value) {
      return isRequired(value)
    },
    relationFn(arr, val) {
      arr.forEach(({key, type}) => {
        let keyArr = this.getStrArr(key)
        if(type === 'required') {
          if(this.isEmpty(val)) {
            keyArr.forEach(v => {
              this.setModel(v, '')
            })
          }
        }
      })
    },
    getStrArr(key) {
      const val = key ? (isArray(key) ? key : (isString(key) ? key.split(',') : [key])) : []
      return val
    },
    disabledFn(disabled){
      if(isFunction(disabled)) {
        return disabled(this.modelRef)
      }
      return disabled
    },
    isType(type) {
      let arr = isArray(type) ? type : [type]
      return arr.includes(this.item.type)
    },
    uploadChange(val) {
      this.inputChange(val)
    },
    dateChange(Moment) {
      let val = Moment && Moment.format ? Moment.format(Moment._f || 'YYYY-MM-DD') : (Moment || null)
      this.inputChange(val)
    },
    checkboxChange(evt) {
      let val = evt && evt.target ? evt.target.checked : evt
      this.inputChange(val ? '1' : '0')
    },
    cascaderChange(evt) {
      this.inputChange(evt)
    },
    inputChange(evt, k0, defaultVal) {
      let {key, modelRef, item} = this
      let val = evt && evt.target ? evt.target.value : evt
      key = k0 || key
      if(key) {
        const keyArr = this.getKeys(key)
        const len = keyArr.length
        let tempObj = modelRef
        keyArr.forEach((k, i) => {
          if(len === (i + 1)) {
            if(this.isArrayType) {
              let v = (!val || (val && !val.length)) ? (isUndefined(defaultVal) ? [] : defaultVal) : val
              if(!k0 && isArray(item.keys)) {
                item.keys.forEach((k1, index1) => {
                  this.setModel(k1, v[index1] || '')
                  // this.inputChange(v[index1], k1, '')
                })
              }
              tempObj[k] = item.format === 'string' ? v + '' : v
            } else {
              tempObj[k] = (val || '') + ''
            }
          } else {
            tempObj[k] = tempObj[k] || {}
            tempObj = tempObj[k]
          }
        })
      }
    }
  }
}
</script>
