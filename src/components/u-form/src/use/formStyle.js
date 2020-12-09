import { isFunction, isBoolean, isPlainObject } from 'lodash'
import { computed, h } from 'vue'

function isShowFn(item) {
  if(isFunction(item.hide)) {
    return !item.hide(this.modelRef)
  } else if(isBoolean(item.hide)) {
    return !item.hide
  } else {
    return true
  }
}
function formItemStyle(item, col2) {
  let w = ''
  let col = typeof item.col !== 'undefined' ? item.col : col2
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
}
function htmlWidth(el, obj, modelRef) {
  let w = 0
  if (['title', 'tabs'].includes(obj.type)) return 0
  let label = isFunction(obj.label) ? obj.label(h, {data: modelRef}) : (obj.label || '')
  if(isPlainObject(label)) return 0
  el.innerHTML = label
  let rules = obj.rules || []

  if(!Array.isArray(rules)) {
    rules = [rules]
  }

  w = Math.max(w, el.clientWidth + (rules.length ? (rules.includes('required') ? 16 : 1 ) : 1))

  return w
}
function colWidth(data, modelRef) {
  let el = document.createElement('div')
  el.style.position = 'fixed'
  el.style.zIndex = -1
  el.style.opacity = 0
  el.style.pointerEvents = 'none'
  document.body.appendChild(el)
  let w = 0
  

  data.forEach(obj => {
    w = Math.max(htmlWidth(el, obj), w)
    
    if(obj.children && obj.children.length) {
      obj.children.forEach(item => {
        w = Math.max(htmlWidth(el, item, modelRef), w)
      })
    }
  })

  document.body.removeChild(el)
  w = Math.min(w, 350)

  return w
}
export default function(modelRef, props) {
  const labelWidth2 =  computed(() => {
   return props.isLabelWidth.value ? (props.labelWidth ? props.labelWidth.value : (colWidth(props.data.value, modelRef) + 'px')) : ''
  })

  return {
    isShowFn,
    colWidth(data) {
      return colWidth(data, modelRef)
    },
    htmlWidth(el, obj){
      return htmlWidth(el, obj, modelRef)
    },
    formItemStyle(item){
      return formItemStyle(item, props.col.value)
    },
    labelWidth2
  }
}