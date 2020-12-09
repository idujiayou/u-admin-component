<template>
  <a-button
    v-bind="$attrs"
    @click="toggle('visible')"
    :loading="loading">
    <slot v-bind="{loading}">
      {{loading ? translate('uFormBtn.loading') : text }}
    </slot>
  </a-button>

  <u-dialog 
      v-model:visible="visible" 
      :title="(dialogProps && dialogProps.title) || text"
      v-bind="dialogProps2"
      @ok="toggle('visible')" >
       <u-form 
        v-if="visible"
        v-bind="formProps2"
        @cancel="toggle('visible')">
      </u-form>
    </u-dialog>
</template>
<script>
import localeUse from '@/use/locale'
import dialogUse from '@/use/dialog'
export default {
  name: 'u-form-btn',
  props: {
    text: String,
    dialogProps: Object,
    formProps: Object
  },
  setup(props) {
    const { translate } = localeUse()
    const dialogObj = dialogUse('visible')
    return {
      ...dialogObj,
      translate
    }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    formProps2() {
      let { formProps = {} } = this

      return {
        ...formProps
      }
    },
    dialogProps2() {
      let { dialogProps = {} } = this

      return {
        ...dialogProps,
        width: dialogProps.width || 600,
        footer: dialogProps.footer || null
      }
    }
  }
}
</script>

