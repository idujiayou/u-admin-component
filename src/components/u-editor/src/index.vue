<template>
  <div>
    <quillEditor
      style="line-height: normal;white-space: pre-wrap;" 
      ref="editor" 
      :value="model"
      :options="editorOption"
      class="quill-editor"
      @input="editorChange">
    </quillEditor>
    <a-modal
      v-model:visible="visible"
      :width="750"
      :title="translate('uEditor.title')"
      :ok-text="translate('uEditor.confirmButtonText')"
      :cancel-text="translate('uEditor.cancelButtonText')"
      @ok="okFn">
      <uUploadImg 
        ref="uploadImg"
        :value="uploadImg"
        multiple
        @upload-change="uploadChange"/>
    </a-modal>
  </div>
</template>
<script>
import localeUse from '@/use/locale'
import { inject } from 'vue'
import { quillEditor } from '@/components/vue-quill-editor/src'
import uUploadImg from '@/components/u-upload-img/src'
import { message } from 'ant-design-vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: 'uEditor',
  props: {
  },
  components: {
    quillEditor,
    // eslint-disable-next-line vue/no-unused-components
    uUploadImg
  },
  setup() {
    const { translate } = localeUse()
    const { uploadImg: uploadImgConfig} = inject('uConfig')

    return {
      translate,
      uploadImgConfig
    }
  },
  data() {
    return {
      model: '',
      visible: false,
      uploadImg: [],
      uploadIndex: 0
    }
  },
  computed: {
    editorOption() {
      
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{'header': 1}, {'header': 2}],               // custom button values
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
        [{'direction': 'rtl'}],                         // text direction
      
        [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
      
        [{'color': []}, {'background': []}],          // dropdown with defaults from theme
        [{'font': []}],
        [{'align': []}],
        ['link', 'image', 'video'],
        ['clean']                                         // remove formatting button
      ]

      return {
        placeholder: this.translate('uEditor.placeholder'),
        modules: {
          toolbar: {
              container: toolbarOptions,  // 工具栏
              handlers: {
                  'image': (value) => {
                      if (value) {
                        let quill = this.$refs.editor.quill
                        let length = quill.getSelection().index
                        this.uploadIndex = length
                        this.showModal()
                      }
                  }
              }
          }
        }
      }
    }
  },
  methods: {
    innerText() {
      let quill = this.$refs.editor.quill
      let length = this.uploadIndex
      let { uploadImg } = this
      if(uploadImg && uploadImg.length) {
        uploadImg.forEach(item => {
          // 插入图片，res为服务器返回的图片链接地址
          length += 1
          quill.insertEmbed(length, 'image', item)
        })
       
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        quill.setSelection(length)
      }
    },
    editorChange(val) {
      console.log(val)
      this.$emit('change', val)
    },
    uploadChange(val) {
      this.uploadImg = val
    },
    showModal() {
      this.visible = true
      this.uploadImg = []
    },
    hideModal() {
      this.visible = false
      this.uploadImg = []
    },
    okFn() {
      let {uploadImg} = this
      let $uploadImg = this.$refs.uploadImg

      if($uploadImg && !$uploadImg.isDone()) {
        message.warning(this.translate('uEditor.validator.uploading'))
        return
      }
      this.innerText()
      this.hideModal()
    }
  }
}
</script>

<style lang="less">
.ql-editor {
  min-height: 200px;
  max-height: 600px;
}
</style>
