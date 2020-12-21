import component from './src'

component.install = function(app) {
  app.component(component.name, component);
}

export default component