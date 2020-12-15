import { isPlainObject } from 'lodash'
export const getAsyncSelectKey = function (type, key, selectedKey) {
  return ['asyncSelect'].includes(type) ? ( (isPlainObject(selectedKey) || !selectedKey) ? ('_asyncSelect_' + key) : selectedKey ) : ''
}