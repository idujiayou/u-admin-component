<template>
  <div class="app-tags-views">
    <router-link
      class="app-tags-item"
      v-for="(tag) in lists"
      :class="isActive(tag) ? 'active' : ''"
      :key="tag.path"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }">
      {{ tag.title }}
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          path: '/',
          fullPath: '/',
          title: '首页',
          query: {}
        },
        {
          path: '/lists',
          fullPath: '/lists',
          title: '列表',
          query: {}
        }
      ]
    }
  },
  methods: {
    isActive(item) {
      return item.path === '/'
    }
  }
}
</script>

<style lang="less" scoped>
  .app-tags-views {
    line-height: 26px;

    .app-tags-item {
      border: 1px solid #eee;
      padding: 0 10px;
      display: inline-block;
      margin-right: 5px;
      font-size: 12px;
      color: #333;

      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
      }
    }
  }
</style>

