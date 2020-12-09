<template>
  <uForm
    class="u-serach-bar"
    :data="data"
    :col="0"
    layout="inline"
    :save-btn-txt="translate('uSearchBar.searchBtnText')"
    :close-btn-txt="translate('uSearchBar.searchResetText')"
    @cancel="onCancel"
    :isLabelWidth="false"
    :submitFn="submitFn"
    isParamsWithLabel>
  </uForm>
</template>
<script>
import localeUse from '@/use/locale'
export default {
  name: 'uSearchBar',
  props: {
    data: Array
  },
  setup() {
    const { translate } = localeUse()
    return {
      translate
    }
  },
  methods: {
    onCancel(vm) {
      vm.resetFields()
    },
    submitFn(params, labelParams) {
      this.$emit('search', {
        params,
        labelParams
      })
      return false
    }
  }
}
</script>

