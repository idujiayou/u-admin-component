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
          @change="tableChange(item, $event)"/>
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
import uFormItem from './form-item'
import uRender from '@/components/u-render'
import { merge, forIn, isFunction, isArray } from 'lodash'
import rulesUse from './use/rulesUse'
import toggleUse from './use/toggleUse'
import uniKeyUse from './use/uniKeyUse'
import formUse from './use/formUse'
import formStyle from './use/formStyle'
import { provide, inject, toRaw, toRefs, isRef, h } from 'vue'
import localeUse from '@/use/locale'
import formPopover from './popover'
import uTableForm from './table-form'
import {
  DownOutlined,
  UpOutlined
} from '@ant-design/icons-vue'
import requestUse from '@/use/request'
import { getValueByKey } from '@/utils'
import modeUse from './use/modeUse'

export default {
  name: 'uForm',
  components: {
    uFormItem,
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
      type: String,
      default: '提交成功'
    },
    failMessage: {
      type: String,
      default: '提交失败'
    }
  },
  setup (props) {
    const { validator = {} } = inject('uConfig')
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
    const {setModel: setModel2} = modeUse()

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
      setRules
    } = rulesUse(data.value, validator, locale)
    const {
      isShowFn,
      colWidth,
      htmlWidth,
      formItemStyle,
      labelWidth2
    } = formStyle(modelRef, propsRef)

    provide('modelRef', modelRef)
    provide('rulesRef', rulesRef)
    provide('mergeValidateInfo', mergeValidateInfo)
    provide('validateInfos',validateInfos)
    provide('setRules',setRules)
    
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
      setModel(key, val) {
        setModel2(modelRef, key, val)
      }
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
      this.setModel(item.key, val)
    },
    getParamsWithLabel(arr, modelRef, temp = []) {
      arr.forEach(item => {
        let children = item.type === 'tabs' ? (item.panes || item.children) : item.children
        if(children && children.length) {
          this.getParamsWithLabel(children, modelRef, temp)
        } else if(!['tabs', 'title'].includes(item.type) && item.key && item.label) {
          let value = getValueByKey(item.key, modelRef)
          if(['select'].includes(item.type)) {
            let props = item.props
            let options = props.options || []
            options.forEach(v => {
              if(value + '' === v.value + '') {
                value = v.label
              }
            })
          }
          temp.push({
            label: item.label,
            value
          })
        }
      })
      return temp
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
                this.$message.success(ret.message || this.successMessage)
                this.$emit('success', ret)
              }).catch(err => {
                this.$message.error(err.message || this.failMessage)
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
