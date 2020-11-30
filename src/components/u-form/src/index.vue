<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <a-form
    v-bind="props2"
    @submit="onSubmit"
    class="u-form"
    @submit.prevent
    :hideRequiredMark="true">
    <template v-for="(item) in formItemsArr" :key="uniKey(item)">
      <template v-if="isShowFn(item)">
        <template v-if="item.type === 'title'">
          <div class="u-form-title" v-if="item.label">
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
            <div v-if="showToggleFlag(item)" class="title-r" @click="toggleTitle(item)">
              <template v-if="hideItemsArr.includes(item._UNIKEY)">
                {{ translate('UForm.open') }}
                <DownOutlined />
              </template>
              <template v-else>
                {{ translate('UForm.close') }}
                <UpOutlined />
              </template>
            </div>
          </div>
          <div v-if="item.children && item.children.length" v-show="!hideItemsArr.includes(item._UNIKEY)">
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
            v-show="toggleShow(item)"
            v-bind="item.props"
            v-on="item.on || {}">
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
    <a-form-item style="text-align: center;">
      <a-button type="primary" @click="onSubmit">
        {{ saveBtnTxt || translate('UForm.save') }}
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetFields">
        {{ closeBtnTxt || translate('UForm.cancel') }}
      </a-button>
    </a-form-item>
    <pre>{{modelRef}}</pre>
  </a-form>
</template>
<script>
import uFormItem from './form-item'
import uRender from '@/components/u-render'
import { cloneDeep, filter, isFunction, isBoolean, isUndefined, isPlainObject, merge, isString, isArray } from 'lodash'
import rulesUse from './rulesUse'
import { provide, inject, toRaw, toRefs, watch, isRef, h } from 'vue'
import localeUse from '@/use/locale'
import formPopover from './popover'
import {
  DownOutlined,
  UpOutlined
} from '@ant-design/icons-vue'

export default {
  name: 'uForm',
  components: {
    uFormItem,
    uRender,
    DownOutlined,
    UpOutlined,
    formPopover
  },
  props: {
    /* 
     * 数组 data
     * 
     * {
          label: '密码',
          key: 'password',
          type: 'input',
          rules: [ 'required', 'isPassword'],
          dataType: Array,
          props: {

          }
        }
    */
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
  },
  setup (props) {
    const { validator = {} } = inject('uConfig')
    const { translate, locale } = localeUse()
    let { 
      modelRef,
      rulesRef,
      resetFields,
      validate,
      validateInfos,
      rulesFn
    } = rulesUse(props.data, validator, locale)

    provide('modelRef', modelRef)
    provide('rulesRef', rulesRef)
    provide('validateInfos',validateInfos)

    const assign = function(obj1, obj2) {
      for(let p in obj1) {
        delete obj1[p]
      }

      for(let p in obj2) {
        obj1[p] = obj2[p]
      }
    }

    watch(modelRef, function() {
      let rulesRef2 = rulesFn(props.data, validator, locale, modelRef)

      if(JSON.stringify(rulesRef) === JSON.stringify(rulesRef2)) return

      assign(rulesRef, rulesRef2)
      //assign(validateInfos, toRaw(obj.validateInfos))
    })

    return {
      modelRef,
      resetFields,
      validate,
      translate
    }
  },
  mounted() {
    this.load()
  },
  data() {
    return {
      defaultProps: {
        layout: 'horizontal'
      },
      hideItemsArr: []
    }
  },
  computed: {
    props2() {
      return {
        ...this.defaultProps,
        ...this.props2
      }
    },
    formItems() {
      let { data } = this
     // let obj = cloneDeep(data)

      return data // this.filterItem(data)
    },
    formItemsArr() {
      let {formItems} = this
      let arr = []
      formItems.forEach(item => {
        if(item.type === 'tabs') {
          let tabKey = item.tabKey || '_tabDefault'
          let index = arr.findIndex( v => v.type === 'tabs' && (tabKey === (v.tabKey || '_tabDefault')))

          if(index == -1) {
            arr.push({
              type: 'tabs',
              key: tabKey,
              props: item.props,
              tabKey,
              panes: [
                item
              ]
            })
          } else {
            arr[index].panes.push(item)
          }
        } else {
          arr.push(item)
        }
      })

      return arr
    },
    labelWidth2() {
      return this.labelWidth ? this.labelWidth : (this.colWidth(this.formItems) + 'px')
    }
  },
  methods: {
    toggleShow(item) {
      let { hideItemsArr, formItemsArr } = this
      
      let index = formItemsArr.findIndex(v => {
        let { toggleKey } = v
        if(toggleKey) {
          if(isString(toggleKey)) {
            toggleKey = toggleKey.split(',')
          }
        }
        
        return v.type === 'title' && toggleKey && toggleKey.includes(item.key)
      })

      let obj = index !== -1 ? formItemsArr[index] : null
      
      let flag = true 

      if(obj && hideItemsArr.includes(obj._UNIKEY)) {
        return false
      }

      return flag
    },
    showToggleFlag(item) {
      let {toggleKey} = item
      let flag = false
      if(toggleKey) {
        if(isString(toggleKey)) {
          toggleKey = toggleKey.split(',')
        }

        let index = this.formItemsArr.findIndex( v => {
          let key = v.key
          return toggleKey.includes(key)
        })
        flag = index !== -1
      }
    
      return flag || (item.children && item.children.length)
    },
    toggleTitle(item) {
      let { hideItemsArr } = this
      let _UNIKEY = item._UNIKEY
      let index = hideItemsArr.findIndex(v => v === item._UNIKEY)
      if(index === -1) {
        hideItemsArr.push(_UNIKEY)
      } else {
        hideItemsArr.splice(index, 1)
      }
    },
    filterItem(obj) {
      return filter(obj,(item) => {
        if(item.children && item.children.length) {
          item.children = this.filterItem(item.children )
        }
        if(isFunction(item.hide)) {
          return !item.hide(this.modelRef)
        } else if(isBoolean(item.hide)) {
          return !item.hide
        } else {
          return true
        }
      })
    },
    isShowFn(item) {
      if(isFunction(item.hide)) {
        return !item.hide(this.modelRef)
      } else if(isBoolean(item.hide)) {
        return !item.hide
      } else {
        return true
      }
    },
    uniKey(data) {
      if(typeof data === 'string') {
        return data
      }
      if(!data._UNIKEY) {
       data._UNIKEY = 'UNIKEY' + Math.random()
      }

      return data._UNIKEY
    },
    formItemStyle(item) {
      let w = ''
      let col = typeof item.col !== 'undefined' ? item.col : this.col
      col = (item.val - 0) || col
      if(col > 0) {
        if(col === 1) {
          w = '100%'
        } else {
          w = (100 / col) + '%'
        }
      }

      return {
        width: w,
        ...item.style
      }
    },
    htmlWidth(el, obj) {
      let w = 0
      if (['title', 'tabs'].includes(obj.type)) return 0
      let label = isFunction(obj.label) ? obj.label(h, {data: this.modelRef}) : (obj.label || '')
      if(isPlainObject(label)) return 0
      el.innerHTML = label
      let rules = obj.rules || []

      if(!Array.isArray(rules)) {
        rules = [rules]
      }

      w = Math.max(w, el.clientWidth + (rules.length ? (rules.includes('required') ? 16 : 1 ) : 1))

      return w
    },
    colWidth(data) {
      let el = document.createElement('div')
      el.style.position = 'fixed'
      el.style.zIndex = -1
      el.style.opacity = 0
      el.style.pointerEvents = 'none'
      document.body.appendChild(el)
      let w = 0

      data.forEach(obj => {
        w = Math.max(this.htmlWidth(el, obj), w)
        
        if(obj.children && obj.children.length) {
          obj.children.forEach(item => {
            w = Math.max(this.htmlWidth(el, item), w)
          })
        }
      })

      document.body.removeChild(el)
      w = Math.min(w, 350)

      return w
    },
    onSubmit(e) {
      e.preventDefault()
      this.validate()
        .then(() => {
          console.log(toRaw(this.modelRef));
        })
        .catch(err => {
          console.log('error', err);
        })
    },
    load() {
      this.mergeModel({
        "user": {
          "password2": "222",
          "dddd": {
            "password2": ""
          },
          "rangePicker1": "2020-11-12"
        },
        "show": "扫毒看来时代峻峰时代峻峰",
        "password3": "2",
        "number": "-1",
        "checkbox": "1",
        "datePicker": "2020-11-06",
        "monthPicker": "2020-08",
        "weekPicker": "2020-11-21",
        "rangePicker2": "2020-12-16",
        "province": "jiangsu",
        "city": "nanjing",
        "district": "zhonghuamen",
        uploadImg: ['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584979051&di=f6306064ea907879a0e5fa8a6523e27c&src=http://c3.haibao.cn/img/600_0_100_0/1474603002.7212/4436c26958f3b21476deb1dd9fdab812.jpg']
      })
    },
    mergeModel(data) {
      merge(this.modelRef, data)
    }
  }
}
</script>
