
/*
* Vue-Quill-Editor index.js
* Author: surmon@foxmail.com
* Github: https://github.com/surmon-china/vue-quill-editor
*/

import _Quill from 'quill'
import quillEditor from './editor.vue'

const Quill = window.Quill || _Quill
const install = (app, globalOptions) => {
  if (globalOptions) {
    quillEditor.props.globalOptions.default = () => globalOptions
  }
  app.component(quillEditor.name, quillEditor)
}

const VueQuillEditor = { Quill, quillEditor, install }

export default VueQuillEditor
export { Quill, quillEditor, install }
