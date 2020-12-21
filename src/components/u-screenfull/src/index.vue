<template>
  <div class="u-screenfull" @click="toggle">
    <FullscreenExitOutlined v-if="isFullscreen"/>
    <FullscreenOutlined v-else/>
  </div>
</template>

<script>
import {
  FullscreenOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons-vue'
import screenfull from 'screenfull'

export default {
  name: 'uScreenfull',
  components: {
    FullscreenOutlined,
    FullscreenExitOutlined
  },
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    this.destroy()
  },
  methods: {
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    toggle() {
      if (!screenfull.isEnabled) {
        this.$message.warning('您的浏览器不支持全屏')
        return false
      }
      screenfull.toggle()
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .u-screenfull {
    display: inline-block;
    cursor: pointer;
  }
</style>