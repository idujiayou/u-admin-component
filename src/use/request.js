import { inject } from 'vue'
import { isFunction } from 'lodash'
export default function(fn) {
  const { Api: ApiConfig} = inject('uConfig')

  const request = function(query) {
    if(isFunction(fn)) {
      return fn(query).then(response => {
        return {
          data: ApiConfig.response.getData(response),
          response
        } 
      })
    } else {
      return Promise.reject('')
    }
  }

  const requestRows = function(query) {
    if(isFunction(fn)) {
      return fn(query).then(response => {
        return {
          data: ApiConfig.response.getRowsData(response),
          total: ApiConfig.response.getPageTotal(response),
          response
        } 
      })
    } else {
      return Promise.reject('')
    }
  }

  return {
    request,
    requestRows
  }
}