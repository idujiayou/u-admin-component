<template>
  <a-modal class="u-dialog" :class="{'u-dialog-full': isFullscreen}">
     <template v-slot:title>
       <div class="u-dialog-title">
          <div class="u-dialog-title-l">
            {{title}}
          </div>
          <div class="u-dialog-title-r" @click="toggle('isFullscreen')">
            <FullscreenExitOutlined v-if="isFullscreen" class="u-dialog-title-icon"/>
            <FullscreenOutlined v-else class="u-dialog-title-icon"/>
          </div>
       </div>
     </template>
     <slot/>
  </a-modal>
</template>
<script>

import {
  FullscreenOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons-vue'
export default {
  name: 'uDialog',
  components: {
    FullscreenExitOutlined,
    FullscreenOutlined
  },
  props: {
    title: String
  },
  data() {
    return {
      isFullscreen: false
    }
  },
  methods: {
    toggle(key) {
      this[key] = !this[key]
    }
  }
}
</script>
