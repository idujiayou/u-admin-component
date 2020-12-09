import { isString } from 'lodash'
import useReactiveRef from '@/use/useReactiveRef'
function toggleShow(item, formItemsArr, hideItemsArr) {
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
}

function showToggleFlag(item, formItemsArr) {
  let {toggleKey} = item
  let flag = false
  if(toggleKey) {
    if(isString(toggleKey)) {
      toggleKey = toggleKey.split(',')
    }

    let index = formItemsArr.findIndex( v => {
      let key = v.key
      return toggleKey.includes(key)
    })
    flag = index !== -1
  }

  return flag || (item.children && item.children.length)
}

function toggleTitle(item, hideItemsArr) {
  let _UNIKEY = item._UNIKEY
  let index = hideItemsArr.findIndex(v => v === item._UNIKEY)
  if(index === -1) {
    hideItemsArr.push(_UNIKEY)
  } else {
    hideItemsArr.splice(index, 1)
  }
}
export default function(formItemsArr) {
  const [hideItemsArr, setHideItemsArr] = useReactiveRef([])
  return {
    toggleShow(item) {
      return toggleShow(item, formItemsArr, hideItemsArr.value)
    },
    showToggleFlag(item) {
      return showToggleFlag(item, formItemsArr)
    },
    toggleTitle(item) {
      return toggleTitle(item, hideItemsArr.value)
    },
    hideItemsArr,
    setHideItemsArr
  }
}