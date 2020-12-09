import { isString } from 'lodash'
export default function() {
  return {
    uniKey(data) {
      if(isString(data)) {
        return data
      }
      if(!data._UNIKEY) {
       data._UNIKEY = 'UNIKEY' + Math.random()
      }

      return data._UNIKEY
    }
  }
}