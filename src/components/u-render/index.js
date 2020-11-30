import { isFunction } from 'lodash'
export default  {
  functional: true,
  render(h) {
    let props = this.$attrs || {}
    return props.render ? (isFunction(props.render) ? props.render(h, props || {}) : (props.render)) : ('')
  }
}