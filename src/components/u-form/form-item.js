import component from './src/form-item'

component.install = function(Vue) {
  Vue.component(component.name, component);
}

export default component