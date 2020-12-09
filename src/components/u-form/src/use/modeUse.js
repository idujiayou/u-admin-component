import { isArray } from 'lodash'
import { getKeys, getValueByKey } from '@/utils'
export default function() {
  const setModel = function(modelRef, key, val) {
    if(key) {
      const keyArr = getKeys(key)
      const len = keyArr.length
      let tempObj = modelRef
      keyArr.forEach((k, i) => {
        if(len === (i + 1)) {
          if(!val && isArray(tempObj[k])) {
            tempObj[k] = []
          }
          tempObj[k] = val
        } else {
          tempObj[k] = tempObj[k] || {}
          tempObj = tempObj[k]
        }
      })
    }
  }
  return {
    setModel,
    getKeys,
    getCurModel: getValueByKey
  }
}