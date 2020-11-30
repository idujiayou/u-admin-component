<template>
  <div class="clearfix">
    <a-upload
      ref="upload"
      :action="action2"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
      :accept="accept"
      :remove="removeChange"
      v-bind="$attrs">
      <div v-if="fileList.length < limit">
        <plus-outlined />
        <div class="ant-upload-text">{{ translate('uUploadImg.upload') }}</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img v-if="previewImage" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
import { PlusOutlined } from '@ant-design/icons-vue';
import localeUse from '@/use/locale'
import { inject } from 'vue'
import { isFunction } from 'lodash'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
}
export default {
  name: 'uUploadImg',
  props: {
    value: [Array, String],
    limit: {
      type: Number,
      default: Infinity
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    action: String
  },
  components: {
    PlusOutlined,
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
      previewVisible: false,
      previewImage: '',
      fileList: []
    }
  },
  computed: {
    action2() {
      return this.action || this.uploadImgConfig.action
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        if(Array.isArray(val)) {
          let fileList = []
          let $fileList = this.fileList

          val.forEach(item => {
            let uid = Math.random()
            let img = $fileList.find(obj => {
              let index = fileList.findIndex(v => v.uid === obj.uid)
              return index === -1 && item === this.getUrl(obj)
            })

            if(img) {
              uid = img.uid
            }
            fileList.push({
              uid,
              status: 'done',
              url: item
            })
          })
          this.fileList = fileList
        }
      }
    }
  },
  methods: {
    isDone() {
      let flag = true
      this.fileList.find(obj => {
        if(obj.status === 'uploading') {
          flag  = false
        }
      })

      console.log(flag, 'uploading')
      return flag
    },
    handleCancel() {
      this.previewVisible = false
    },
    removeChange() {
      setTimeout(() => {
        this.uploadChange()
      })
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    isSuccesss(file) {
      let {uploadImgConfig} = this
      return uploadImgConfig && isFunction(uploadImgConfig.requestFormat) && uploadImgConfig.requestFormat(file) || (file.response && file.response.code + '' === '200')
    },
    getUrl(file) {
      let {uploadImgConfig} = this
      return uploadImgConfig && isFunction(uploadImgConfig.getUrl) && uploadImgConfig.getUrl(file) || (file.response && file.response.data && file.response.data.url) || file.url
    },
    uploadChange() {
      let {fileList, getUrl} = this
      let arr = []
      fileList.forEach(item => {
        arr.push(getUrl(item))
      })
      this.$emit('upload-change', this.limit > 1 ? arr : (arr + ''))
    },
    handleChange({ fileList, file }) {
      let {isSuccesss} = this

      if(file.status === 'error') {
        let index = this.fileList.findIndex( v => v.uid === file.uid)
        if(index !== -1) {
          this.fileList.splice(index, 1)
        }
        return
      }
      this.fileList = fileList
      if(file.status === 'done' && isSuccesss(file)) {
        this.uploadChange()
      }
    }
  }
}
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
