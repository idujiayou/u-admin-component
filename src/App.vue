<template>
  <a-config-provider :locale="locale">
    <router-view/>
  </a-config-provider>
</template>

<script>
  
  import { provide, inject } from 'vue'
  import uConfig from '@/config'
  export default {
    setup() {
      provide('uConfig', uConfig)

      return {
        locale: inject('locale')
      }
    }
  }
</script>

<style lang="less">
  @import '~@/style/index.less';
</style>
