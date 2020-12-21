import { isFunction } from 'lodash'
export default  {
  functional: true,
  render() {
    let props = this.$attrs || {}
    return props.render ? (isFunction(props.render) ? props.render(props) : (props.render)) : ('')
  }
}