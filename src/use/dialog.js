import { isArray } from 'lodash'
import {ref} from 'vue'
export default function(keys) {
  let keyArr = isArray(keys) ? keys : [keys]
  let obj = {}
  keyArr.forEach(item => {
    obj[item] = ref(false)
  })

  return {
    ...obj,
    toggle(key) {
      obj[key].value = !obj[key].value 
    }
  }

}