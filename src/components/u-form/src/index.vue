<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <a-form
    v-bind="props2"
    @submit="onSubmit"
    ref="form"
    class="u-form"
    :model="modelRef"
    @submit.prevent
    :hideRequiredMark="true">
    <template v-for="(item) in formItemsArr" :key="uniKey(item)">
      <template v-if="isShowFn(item)">
        <template v-if="item.type === 'title'">
          <div 
            v-if="item.label" 
            class="u-form-title" 
            :class="{
              'u-form-title-toggle': showToggleFlag(item)
            }" 
            @click="showToggleFlag(item) && toggleTitle(item)">
            <div class="title-l">
              <uRender :render="item.label" :data="modelRef"></uRender>
              <formPopover 
                :tips="item.tips"
                :tipsTitle="item.tipsTitle">
              </formPopover>
              <span class="sub-title">
                <uRender :render="item.subTitle" :data="modelRef"></uRender>
              </span>
            </div>
            <div v-if="showToggleFlag(item)" class="title-r">
              <template v-if="hideItemsArr.includes(item._UNIKEY)">
                {{ translate('uForm.open') }}
                <DownOutlined />
              </template>
              <template v-else>
                {{ translate('uForm.close') }}
                <UpOutlined />
              </template>
            </div>
          </div>
          <div v-if="item.children && item.children.length" v-show="!hideItemsArr.includes(item._UNIKEY)" class="u-form-box">
            <template v-for="(child) in item.children" :key="uniKey(child)">
              <template v-if="isShowFn(child)">
                <uRender
                  v-if="child.render" 
                  :render="child.render" 
                  :data="modelRef" />
                <u-form-item 
                  v-else 
                  :labelWidth="labelWidth2" 
                  :style="formItemStyle(child)" 
                  :item="child" 
                  :hideRequiredMark="props2.hideRequiredMark">
                </u-form-item>
              </template>
            </template>
          </div>
        </template>
        <template v-else-if="item.type === 'tabs'">
          <a-tabs
            class="u-form-box"
            v-show="toggleShow(item)"
            v-bind="item.props">
            <a-tab-pane v-for="pane in item.panes" :key="uniKey(pane)" forceRender>
              <template #tab>
                {{pane.label}}
                <formPopover 
                  :tips="pane.tips"
                  :tipsTitle="pane.tipsTitle">
                </formPopover>
              </template>
              <template v-for="paneItem in pane.children" :key="uniKey(paneItem)">
                <template v-if="isShowFn(paneItem)">
                  <uRender
                    v-if="paneItem.render" 
                    :render="paneItem.render" 
                    :data="modelRef" />
                  <u-form-item 
                    v-else 
                    :labelWidth="labelWidth2" 
                    :style="formItemStyle(paneItem)" 
                    :item="paneItem" 
                    :hideRequiredMark="props2.hideRequiredMark">
                  </u-form-item>
                </template>
              </template>
            </a-tab-pane>
          </a-tabs>
        </template>
        <uRender 
          v-else-if="item.render" 
          :render="item.render" 
          :data="modelRef"
          v-show="toggleShow(item)"/>
        <uTableForm 
          v-else-if="item.type === 'table'"
          :form-key="item.key"
          v-bind="item.props"
          :dataSource="modelRef[item.key] || []"
          @data-change="tableChange(item, $event)"/>
        <u-form-item 
          v-else 
          :labelWidth="labelWidth2" 
          :style="formItemStyle(item)" 
          :item="item" 
          :hideRequiredMark="props2.hideRequiredMark"
          v-show="toggleShow(item)">
        </u-form-item>
      </template>
    </template>
    <a-form-item v-if="!hideBtns" class="u-form-btn-box" style="text-align: center;">
      <a-button type="primary" @click="onSubmit">
        {{ saveBtnTxt || translate('uForm.save') }}
      </a-button>
      <a-button style="margin-left: 10px;" @click="cancelFn">
        {{ closeBtnTxt || translate('uForm.cancel') }}
      </a-button>
    </a-form-item>
    <!-- <pre>{{modelRef}}</pre> -->
  </a-form>
</template>
<script>
import uRender from 'u-admin-component/src/components/u-render'
import { merge, forIn, isFunction, isArray, isString } from 'lodash'
import rulesUse from './use/rulesUse'
import toggleUse from './use/toggleUse'
import uniKeyUse from './use/uniKeyUse'
import formUse from './use/formUse'
import formStyle from './use/formStyle'
import { provide, inject, toRaw, toRefs, isRef, h } from 'vue'
import localeUse from 'u-admin-component/src/use/locale'
import formPopover from './popover'
import uTableForm from './table-form'
import {
  DownOutlined,
  UpOutlined
} from '@ant-design/icons-vue'
import requestUse from 'u-admin-component/src/use/request'
import uConfig from 'u-admin-component/src/config'
import { getAsyncSelectKey } from 'u-admin-component/src/components/u-form/src/utils'

export default {
  name: 'uForm',
  components: {
    uRender,
    DownOutlined,
    UpOutlined,
    formPopover,
    uTableForm
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    props: {
      type: Object,
      default() {
        return {}
      }
    },
    labelWidth: String,
    isLabelWidth: {
      type: Boolean, 
      default: true
    },
    col: {
      type: Number,
      default: 1
    },
    saveBtnTxt: {
      type: String
    },
    closeBtnTxt: {
      type: String
    },
    request: Function,
    submitFn: Function,
    loadParams: Object,
    saveParams: Object,
    filterParams: [Function, Array],
    beforeSubmit: Function,
    // 是否组装带label的参数
    isParamsWithLabel: {
      type: Boolean,
      default: false
    },
    hideBtns: {
      type: Boolean, 
      default: false
    },
    successMessage: {
      type: String
    },
    failMessage: {
      type: String
    }
  },
  setup (props) {
    const { validator = {} } = inject('uConfig') || uConfig
    const { translate, locale } = localeUse()
    const propsRef = toRefs(props)
    const { data = [] } = propsRef
    const { formItemsArr } = formUse(data.value)

    const {
      toggleShow,
      showToggleFlag,
      toggleTitle,
      hideItemsArr
    } = toggleUse(formItemsArr.value)

    const {
      uniKey
    } = uniKeyUse()

    let { 
      modelRef,
      rulesRef,
      resetFields,
      validate,
      validateInfos,
      mergeValidateInfo,
      rulesFn,
      setRules,
      setModelRef,
      getModelRef
    } = rulesUse(data.value, validator, locale)

    const {
      isShowFn,
      colWidth,
      htmlWidth,
      formItemStyle,
      labelWidth2
    } = formStyle(modelRef, propsRef)
    
    const {request: requestFn} = requestUse(props.request)

    return {
      modelRef,
      resetFields,
      validate,
      translate,
      toggleShow,
      showToggleFlag,
      toggleTitle,
      hideItemsArr,
      uniKey,
      formItemsArr,
      isShowFn,
      colWidth,
      htmlWidth,
      formItemStyle,
      labelWidth2,
      requestFn,
      validateInfos,
      rulesRef,
      setModelRef,
      getModelRef
    }
  },
  mounted() {
    this.load()
  },
  data() {
    return {
      defaultProps: {
        layout: 'horizontal'
      }
    }
  },
  computed: {
    props2() {
      return {
        ...this.defaultProps,
        ...this.props
      }
    }
  },
  methods: {
    tableChange(item, val) {
      this.setModelRef(item.key, val)
    },
    getParamsWithLabel(arr, modelRef, temp = []) {
      arr.forEach(item => {
        let children = item.type === 'tabs' ? (item.panes || item.children) : item.children

        if(children && children.length) {
          this.getParamsWithLabel(children, modelRef, temp)

        } else if(!['tabs', 'title'].includes(item.type) && item.key && item.label) {
          let value = this.getModelRef(item.key, modelRef)

          if(['select'].includes(item.type)) {
            let props = item.props
            let options = props.options || []
            let arr = value ? (isArray(value) ? value : value.split(',') ) : []
            let valArr = []

            arr.forEach(v => {
              let index = options.findIndex(i => i.value + '' === v + '')

              if(index !== -1 && options[index]) {
                valArr.push( isString(options[index]) ? options[index] : (options[index].label || options[index].value))
              }
            })

            value = valArr
            
          } else if(['asyncSelect'].includes(item.type)) {
            let selectedKey = getAsyncSelectKey(item.type, item.key, item.selectedKey)
            let selectedVal = this.getModelRef(selectedKey, modelRef)
            let { showKey = 'name' } = item.props || {}

            if(selectedVal) {
              value = []
              selectedVal.forEach(obj => {
                value.push(obj[showKey])
              })
            }
          } else if(['cascader'].includes(item.type)) {
            if(value && isArray(value)) {
              let props = item.props
              let options = props.options || []

              if(options.length) {
                value = this.getCascaderVal(options, value)
              }
              value = value.join(' / ')
            }
          } else if(['rangePicker'].includes(item.type)) {
            if(value && isArray(value)) {
              value = value.join(' - ')
            }
          }
          temp.push({
            label: item.label,
            value
          })
        }
      })
      return temp
    },
    getCascaderVal(options, value, index = 0, arr = []) {
      options.forEach(item => {
        let val = value[index]
        if(item.value + '' === val + '') {
          arr.push(item.label)
          if(item.children && item.children.length) {
            this.getCascaderVal(item.children, value, index + 1, arr)
          }
        }
      })
      
      return arr
    },
    onSubmit(e) {
      e.preventDefault()
      const { submitFn, modelRef, filterParams, saveParams, getParamsWithLabel, formItemsArr, isParamsWithLabel } = this
      this.$refs.form.validate()
        .then(() => {
          if(typeof this.beforeSubmit === 'function' && !this.beforeSubmit(modelRef)) {
            return
          }
          const modelRef2 = toRaw(modelRef)
          let labelParams = []
          if(isParamsWithLabel) {
            labelParams = getParamsWithLabel(formItemsArr, modelRef2)
          }
          if(!isFunction(submitFn)) return
          // 过滤下划线
          let params = {}
          forIn(modelRef2, (v, key) => {
           if(!((isArray(filterParams) && filterParams.includes(key)) || key.indexOf('_') === 0)) {
             params[key] = v
           }
          })

          if(isFunction(filterParams)) {
            params = filterParams(params, modelRef2)
          }

          let promiseFn = submitFn({
            ...params,
            ...saveParams
            },
            labelParams)

          if(promiseFn.then) {
            const fn = () => {
              promiseFn.then(ret => {
                this.$message.success(ret.message || this.successMessage || this.translate('uForm.successMessage'))
                this.$emit('success', ret)
              }).catch(err => {
                this.$message.error(err.message || this.failMessage || this.translate('uForm.failMessage'))
                this.$emit('fail', err)
              })
            }
            
          }
        })
        .catch(err => {
          console.log('error', err);
        })
    },
    load() {
      let { requestFn, mergeModel, loadParams } = this

      requestFn(loadParams).then(({data}) => {
        mergeModel(data)
      })
    },
    mergeModel(data) {
      merge(this.modelRef, data)
    },
    cancelFn() {
      this.resetFields()
      this.$emit('cancel', this)
    }
  }
}
</script>
