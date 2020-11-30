<template>
  <a-form-item
    class="u-form-item"
    v-bind="props">
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
      v-bind="item.props"
      :value="model" 
      v-on="item.on || {}"
      @input="inputChange($event)" />
    <a-input-number
      v-else-if="isType('inputNumber')" 
      v-bind="item.props"
      :value="model" 
      v-on="item.on || {}"
      @change="inputChange($event)" />
    <a-date-picker 
      v-else-if="isType('datePicker')" 
      v-bind="item.props"
      v-on="item.on || {}"
      :valueFormat="item.props && item.props.valueFormat ? item.props.valueFormat : 'YYYY-MM-DD'"
      :value="model" 
      @change="dateChange" />
    <a-month-picker 
      v-else-if="isType('monthPicker')" 
      v-bind="item.props"
      v-on="item.on || {}"
      :valueFormat="item.props && item.props.valueFormat ? item.props.valueFormat : 'YYYY-MM'"
      :value="model" 
      @change="dateChange" />
    <a-range-picker 
      v-else-if="isType('rangePicker')" 
      v-bind="item.props"
      v-on="item.on || {}"
      :valueFormat="item.props && item.props.valueFormat ? item.props.valueFormat : 'YYYY-MM-DD'"
      :value="model" 
      @change="dateChange" />
    <a-week-picker 
      v-else-if="isType('weekPicker')" 
      v-bind="item.props"
      v-on="item.on || {}"
      :valueFormat="item.props && item.props.valueFormat ? item.props.valueFormat : 'YYYY-w'"
      :value="model" 
      @change="dateChange" />
    <a-cascader
      v-else-if="isType('cascader')" 
      v-bind="item.props"
      v-on="item.on || {}"
      :value="model" 
      @change="inputChange($event)" 
    />
    <a-checkbox 
      v-else-if="isType('checkbox')"
      v-bind="item.props"
      v-on="item.on || {}"
      :checked="model"
      @change="checkboxChange($event)">
      <uRender v-if="item.text" :render="item.text" :data="modelRef"></uRender>
    </a-checkbox>
    <a-switch 
      v-else-if="isType('switch')"
      v-bind="item.props"
      v-on="item.on || {}"
      :checked="model"
      @change="checkboxChange($event)"/>
    <a-checkbox-group
      v-else-if="isType('checkboxGroup')" 
      v-bind="item.props"
      v-on="item.on || {}"
      :value="model" 
      @change="inputChange($event)"/>
    <a-radio-group
      v-else-if="isType('radioGroup')" 
      v-bind="item.props"
      v-on="item.on || {}"
      :value="model" 
      @change="inputChange($event)"/>
    <a-select
      v-else-if="isType('select')" 
      v-bind="item.props"
      v-on="item.on || {}"
      :value="model" 
      @change="inputChange($event)"/>
    <u-upload-img 
      ref="uploadImg" 
      v-else-if="isType('uploadImg')" 
      :value="model"
      v-bind="item.props"
      v-on="item.on || {}"
      @upload-change="uploadImgChange($event)"/>
    <u-editor 
      :value="model"
      v-bind="item.props"
      v-on="item.on || {}"
      v-else-if="isType('editor')" 
      @change="inputChange($event)"/>
    <a-input 
      v-else 
      v-bind="item.props"
      v-on="item.on || {}"
      :value="model" 
      @input="inputChange($event)"/>
  </a-form-item>
</template>
<script>
import { inject, watch } from 'vue'
import uRender from '@/components/u-render'
import uUploadImg from '@/components/u-upload-img/src'
import uEditor from '@/components/u-editor/src'
import formPopover from './popover'
import localeUse from '@/use/locale'
import { isArray, isUndefined, isFunction } from 'lodash'

export default {
  props: {
    item: Object,
    hideRequiredMark: Boolean,
    labelWidth: String
  },
  components: {
    uRender,
    formPopover,
    uUploadImg,
    uEditor
  },
  setup() {
    const modelRef = inject('modelRef')
    const validateInfos = inject('validateInfos')
    const rulesRef = inject('rulesRef')
    const { translate } = localeUse()
    return {
      modelRef,
      validateInfos,
      rulesRef,
      translate
    }
  },
  watch: {
    rulesRef: {
      handler() {
        this.uploadImgRulesFn()
      },
      immdiate: true
    }
  },
  computed: {
    props() {
      let { item, validateInfos } = this
      let props = item ? (item.formItemProps || {}) : {}
      return {
        ...props,
        ...validateInfos[item.key]
      }
    },
    rules() {
      let { item, rulesRef, key } = this
      return key ? (rulesRef[key] || []) : []
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
        return item.message
      })

      return arr
    },
    key() {
      return this.item.key || ''
    },
    isArrayType() {
      let { item } = this
      let props = item.props || {}
      let mode = props.mode || ''
      let isSelect = (this.isType(['select']) && ['multiple', 'tags'].includes(mode)) 
      let isUploadImg = (this.isType(['uploadImg']) && (item.props && item.props.limit || Infinity) > 1) 
      return isUploadImg || isSelect || this.isType(['rangePicker', 'cascader', 'checkboxGroup'])
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
          
          if(!cur || JSON.stringify(cur) !== JSON.stringify(val)) {
            this.inputChange(val, key)
          }
          
        } else {
          val = cur || []
        }
      } else {
        val = this.getCurModel(key)
        if(this.isType(['checkbox', 'switch'])) {
          val = val === '1'
        }
      }

      return val
    }
  },
  methods: {
    uploadImgRulesFn() {
      let {item, key, rulesRef, translate} = this
      if(key && item.type === 'uploadImg') {

        let msg = translate('uUploadImg.validator.uploading')
        const uploadImgRules = {
          _type: 'uploadImg',
          message: msg,
          trigger: 'change',
          validator(rule, value) {
            let $uploadImg = this.$refs.uploadImg
            if($uploadImg) {
              let isDone = $uploadImg.isDone()
              if(isDone) {
                return Promise.resolve()
              } else {
                return Promise.reject(msg)
              }
            }
          }
        }
        if(rulesRef[key]) {
          if(rulesRef[key].findIndex(v => v._type === 'uploadImg') === -1) {
            rulesRef[key].push(uploadImgRules)
          }
        } else {
          rulesRef[key] = [uploadImgRules]
        }
        console.log(key, rulesRef, '4444')
      }
    },
    getCurModel(key) {
      let {modelRef} = this
      let val = ''
      if(key) {
        const keyArr = this.getKeys(key)
        const len = keyArr.length
        let tempObj = modelRef
        keyArr.forEach((k, i) => {
          if(len === (i + 1)) {
            val = tempObj[k] 
          } else {
            tempObj[k] = tempObj[k] || {}
            tempObj = tempObj[k]
          }
        })
      }

      return val
    },
    isType(type) {
      let arr = isArray(type) ? type : [type]
      return arr.includes(this.item.type)
    },
    getKeys(key) {
      let path = key.replace(/\[(\w+)\]/g, '.$1')
          path = path.replace(/^\./, '')
      const keyArr = path.split('.')
      return keyArr
    },
    uploadImgChange(val) {
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
              tempObj[k] = v

              if(!k0 && isArray(item.keys)) {
                item.keys.forEach((k1, index1) => {
                  this.inputChange(v[index1], k1, '')
                })
              }
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
