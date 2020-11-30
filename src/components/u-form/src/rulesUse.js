import { reactive } from 'vue'
import { useForm } from '@ant-design-vue/use'
import { isString, isArray, isPlainObject, isFunction, isBoolean, isEmpty, isNumber } from 'lodash'
import { getLocaleValue } from '@/lang/index'
import localeUse from '@/use/locale'
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
              if (value !== true && !isNumber(value) && isEmpty(value)) {
                return Promise.reject(getLocaleValue(locale, 'UValidator.required'))
              } else {
                return Promise.resolve()
              }
            }, 
            message: getLocaleValue(locale, 'UValidator.required'), 
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

const rulesFn = function(data, validator, locale, modelRef, prevObj) {
  let obj = prevObj || {}
  data.forEach(({key, rules, hide, children}) => {
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

const modelFn = function(data, prevObj) {
  let obj = prevObj || {}
  data.forEach(({key, dataType, children, type}) => {
    if(key && !['title', 'tabs'].includes(type)) {
      let path = key.replace(/\[(\w+)\]/g, '.$1')
          path = path.replace(/^\./, '')
      const keyArr = path.split('.')
      const len = keyArr.length
      let tempObj = obj
      keyArr.forEach((k, i) => {
        if(len === (i + 1)) {
          tempObj[k] = isArray(dataType) ? [] : ''
        } else {
          tempObj[k] = tempObj[k] || {}
          tempObj = tempObj[k]
        }
      })
    }
    if(children && children.length) {
      modelFn(children, obj)
    }
  })

  return reactive(obj)
}


export default function rulesUse(data, validator, locale1, modelRef1) {
  
  const modelRef = modelRef1 ? modelRef1 : modelFn(data)
  const { locale } = locale1 ? {locale: locale1} : localeUse()
  const { 
    rulesRef,
    initialModel,
    validateInfos,
    resetFields,
    validate,
    validateField,
    mergeValidateInfo,
  } = useForm(
    modelRef,
    rulesFn(data, validator, locale, modelRef)
  )

  return {
    modelRef,
    rulesRef,
    initialModel,
    validateInfos,
    resetFields,
    validate,
    validateField,
    mergeValidateInfo,
    rulesFn
  }
}