<template>
  <a-menu theme="dark"  mode="inline">
    <a-sub-menu key="sub1">
      <template v-slot:title>
        <span><span>User</span></span>
      </template>
      <a-menu-item key="3">Tom</a-menu-item>
      <a-menu-item key="4">Bill</a-menu-item>
      <a-menu-item key="5">Alex</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template v-slot:title>
        <span><span>Team</span></span>
      </template>
      <a-menu-item key="6">Team 1</a-menu-item>
      <a-menu-item key="8">Team 2</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
export default {
  components: {
  }
}
</script>
