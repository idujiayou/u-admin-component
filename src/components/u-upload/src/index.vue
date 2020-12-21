<template>
  <div class="clearfix" style="line-height: 0">
    <a-upload
      v-if="listType === 'picture-card'"
      ref="upload"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      :remove="removeChange"
      v-bind="props2">
      <div v-if="fileList.length < limit && !isShow">
        <plus-outlined />
        <div class="ant-upload-text">{{ translate('uUpload.upload') }}</div>
      </div>
    </a-upload>
    <a-upload-dragger
      v-else
      name="file"
      ref="upload"
      :multiple="multiple"
      :file-list="fileList"
      :remove="removeChange"
      v-bind="props2">
      <template v-if="!isShow">
        <p class="ant-upload-drag-icon">
          <inbox-outlined />
        </p>
        <p class="ant-upload-text">
          点击或拖拽到此区域上传
        </p>
      </template>
    </a-upload-dragger>
    <u-dialog :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img v-if="previewImage" style="width: 100%" :src="previewImage" />
    </u-dialog>
  </div>
</template>

<script>
import { PlusOutlined, InboxOutlined } from '@ant-design/icons-vue';
import localeUse from 'u-admin-component/src/use/locale'
import { inject } from 'vue'
import { isFunction } from 'lodash'
import uConfig from 'u-admin-component/src/config'
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
}
export default {
  name: 'uUpload',
  props: {
    value: [Array, String],
    multiple: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: Infinity
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    action: String,
    listType: {
      type: String,
      default: 'picture-card'
    },
    mode: {
      type: String,
      default: 'edit' // 'show'
    }
  },
  components: {
    PlusOutlined,
    InboxOutlined
  },
  setup() {
    const { translate } = localeUse()
    const { upload: uploadImgConfig} = inject('uConfig') || uConfig

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
    isShow() {
      return this.mode === 'show'
    },
    props2() {
      let {$attrs, handleChange, isShow} = this

      return {
        ...$attrs,
        action: $attrs.action || this.uploadImgConfig.action,
        disabled: isShow ? true : $attrs.disabled,
        onChange(evt) {
          if(isFunction($attrs.onChange)) {
            $attrs.onChange(evt)
          }
          handleChange(evt)
        }
      }
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
            if(!img) {
              let arr = item.split('/')
              img = {
                uid,
                name: arr[arr.length - 1]
              }
            }
            fileList.push({
              ...img,
              status: 'done',
              url: item
            })
          })
 
          let flag = false
          // 是否列表是否已经修改 防止重复修改
          if(fileList.length === $fileList.length) {
            $fileList.forEach((item, index) => {
              if(item.uid !== fileList[index]) {
                flag = true
              }
            })
          } else {
            flag = true
          }
          if(flag) {
            this.fileList = fileList
          }
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
