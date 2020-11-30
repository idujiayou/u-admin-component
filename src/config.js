import * as validator from '@/utils/validator'
export default {
  validator,
  uploadImg: {
    action: 'http://rap2api.taobao.org/app/mock/266394/upload',
    requestFormat(file) {
      return file.response && file.response.code + '' === '200'
    },
    getUrl(file) {
      return file.response && file.response.data && file.response.data.url || file.url
    }
  }
}