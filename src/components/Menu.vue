<template>
  <div class="menu">
    <ul>
      <button v-on:click="changeView('overview')">overview</button>
      <li v-on:click="changeView('devices')">devices</li>
      <li v-on:click="changeView('config')">config</li>
      <li v-on:click="changeView('other')">other</li>
      <li v-on:click="changeView('user')">user</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    changeView: function (page) {
      // 触发父级组件事件this.$emit
      this.$emit('change-page', page);
      console.log(page)
    }
  }
}
</script>

<style scoped>
.menu {
  padding-top: 20px;
  height: auto;
  width: 200px;
  background: #42b983;
}
</style>
