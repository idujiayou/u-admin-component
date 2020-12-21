<template>
  <a-config-provider 
    :locale="locale" 
    :getPopupContainer="getPopupContainer">
    <router-view/>
  </a-config-provider>
</template>

<script>
  
  import { provide, inject } from 'vue'
  import uConfig from 'u-admin-component/src/config'
  export default {
    setup() {
      provide('uConfig', uConfig)

      return {
        locale: inject('locale')
      }
    },
    methods: {
      getPopupContainer(el, dialogContext) {
        if (dialogContext) {
          return dialogContext.getDialogWrap();
        } else {
          if(el && el.classList.contains('ant-menu-submenu-title')) {
            return el.parentNode 
          }
          return document.body;
        }
      }
    }
  }
</script>

<style lang="less">
  @import '~u-admin-component/src/style/index.less';
</style>
