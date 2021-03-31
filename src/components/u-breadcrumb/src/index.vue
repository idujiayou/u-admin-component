<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item) in levelList" :key="item.path">
      <span class="no-redirect">
        {{ translate(getTitle(item)) }} 
      </span>
        <!-- <a @click.prevent="handleLink(item)">{{ translate(getTitle(item)) }}</a> -->
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script>
import localeUse from 'u-admin-component/src/use/locale'
import pathToRegexp from 'path-to-regexp'
export default {
  name: 'uBreadcrumb',
  setup() {
    const { translate } = localeUse()
    return {
      translate
    }
  },
  data() {
    return {
      levelList: null
    }
  },
  created() {
    this.getBreadcrumb()
  },
  watch: {
    $route(route) {
      this.getBreadcrumb()
    }
  },
  methods: {
    getTitle(route) {
      let { meta = {} } = route
      return meta.i18n ? ('route.' + meta.i18n) : (meta.title || '')
    },
    getBreadcrumb() {
      this.levelList = this.$route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    pathCompile(path) {
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

