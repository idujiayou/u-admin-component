<template>
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews" :max="maxTagCached">
        <component :is="Component" />
      </keep-alive>
    </router-view>
</template>
<script>
import { ref, computed } from 'vue'

export default {
  name: 'app-body',
  setup() {
    const maxTagCached = ref(20)
    
    const cachedViews = computed(() => {
      return ['Home']
    })

    return {
      maxTagCached,
      cachedViews
    }
  }
}
</script>

