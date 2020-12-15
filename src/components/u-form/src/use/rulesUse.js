import { reactive, watch } from 'vue'
import { useForm } from '@ant-design-vue/use'
import { isString, isArray, isPlainObject, isFunction, isBoolean } from 'lodash'
import { getLocaleValue } from '@/lang/index'
import localeUse from '@/use/locale'
import modeUse from './modeUse'
import { isRequired } from '@/utils'
import { getAsyncSelectKey } from '../utils'
// 设置规则
const setRules = function(rules, validator, locale, modelRef) {
  let arr = []
  let rulesTemp = []

  if(isFunction(rules)) {
    rules = rules(modelRef) || []
  }
  if(isString(rules) && rules) {
    rulesTemp = rules.split(',')
  } else if(isArray(rules)) {
    rulesTemp = rules
  }

  rulesTemp.forEach((rule) => {
    if(isPlainObject(rule)) {
      arr.push(rule)
    } else if(isString(rule)) {
      let obj = null
      switch(rule) {
        case 'required': {
          obj = {
            validator(rule, value) {
              if (isRequired(value)) {
                return Promise.reject(getLocaleValue(locale, 'uValidator.required'))
              } else {
                return Promise.resolve()
              }
            }, 
            message: getLocaleValue(locale, 'uValidator.required'), 
            trigger: 'change'
          }
          break
        }
        default : {
          if(isFunction(validator[rule])) {
            let fn = validator[rule]
            let message = fn.message
            obj = {
              validator: fn, 
              trigger: 'change'
            }

            if(message) {
              obj.message = message
            }
          }
        }
      }
      if(obj) {
        arr.push(obj)
      }
    }
  })

  return arr
}

// 生成规则函数
const rulesFn = function(data, validator, locale, modelRef, prevObj) {
  let obj = prevObj || {}
  data.forEach(({key, rules, hide, children, type, props}) => {
    let isHide = false

    if(isBoolean(hide)) {
      isHide = hide
    } else if(isFunction(hide)) {
      isHide = hide(modelRef)
    }
    if(key && rules && !isHide) {
      obj[key] = setRules(rules, validator, locale, modelRef)
    }

    if(children && children.length) {
      rulesFn(children, validator, locale, modelRef, obj)
    }
  })
  return reactive(obj)
}

// 生成form表单
const modelFn = function(data, prevObj, CachKeys) {
  let obj = prevObj || {}
  data.forEach(({key, dataType, children, type, keys, selectedKey}) => {
    if(key && !['title', 'tabs'].includes(type)) {
      let path = key.replace(/\[(\w+)\]/g, '.$1')
          path = path.replace(/^\./, '')
      const keyArr = path.split('.')
      const len = keyArr.length
      let tempObj = obj
      let isDataTypeArr = type === 'table' || dataType === 'array'

      keyArr.forEach((k, i) => {
        if(len === (i + 1)) {
          tempObj[k] = isDataTypeArr ? [] : ''
          if(isArray(keys)) {
            CachKeys.splice.apply(CachKeys, [0, 0, ...keys])
          }
          let selectedKey2 = getAsyncSelectKey(type, key, selectedKey)

          if(selectedKey2) {
            CachKeys.push(selectedKey2)
          }
        } else {
          tempObj[k] = tempObj[k] ||(isDataTypeArr ? [] : {})
          tempObj = tempObj[k]
        }
      })
    }
    if(children && children.length) {
      modelFn(children, obj, CachKeys)
    }
  })

  return reactive(obj)
}


export default function rulesUse(data, validator, locale1, modelRef1) {
  let CachKeys = []
  const modelRef = modelRef1 ? modelRef1 : modelFn(data, null, CachKeys)
  const { locale } = locale1 ? {locale: locale1} : localeUse()
  const {setModel} = modeUse()
  const rulesRef = rulesFn(data, validator, locale, modelRef)

  const { 
    initialModel,
    validateInfos,
    resetFields,
    validate,
    validateField,
    mergeValidateInfo,
  } = useForm(
    modelRef,
    []
  )

  const assign = function(obj1, obj2) {
    for(let p in obj1) {
      delete obj1[p]
    }

    for(let p in obj2) {
      obj1[p] = obj2[p]
    }
  }

  watch(modelRef, function() {
    let rulesRef2 = rulesFn(data, validator, locale, modelRef)
    if(JSON.stringify(rulesRef) === JSON.stringify(rulesRef2)) return
    assign(rulesRef, rulesRef2)
    //assign(validateInfos, toRaw(obj.validateInfos))
  })

  return {
    modelRef,
    rulesRef,
    initialModel,
    validateInfos,
    resetFields() {
      resetFields()
      // 清除额外的参数 一般和数组相连
      CachKeys.forEach( k => {
        setModel(modelRef, k, '')
      })
    },
    validate,
    validateField,
    mergeValidateInfo,
    rulesFn,
    setRules(rules) {
      return setRules(rules, validator, locale, modelRef)
    }
  }
}