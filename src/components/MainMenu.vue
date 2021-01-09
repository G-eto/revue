<template>
  <div>
    <el-button v-on:click="switchMenu" v-bind:icon="menuIcon" circle></el-button>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isMenuOpen">
      <el-menu-item index="1" v-on:click="changeView('overview')">
        <i class="el-icon-data-line"></i>
        <span slot="title">Over View</span>
      </el-menu-item>
      <el-menu-item index="2" v-on:click="changeView('devices')">
        <i class="el-icon-mobile"></i>
        <span slot="title">Devices</span>
      </el-menu-item>
      <el-menu-item index="3" v-on:click="changeView('docs')">
        <i class="el-icon-document"></i>
        <span slot="title">Docs</span>
      </el-menu-item>
      <el-menu-item index="4" v-on:click="changeView('manager')">
        <i class="el-icon-setting"></i>
        <span slot="title">Manage</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      isMenuOpen: false,
      menuIcon: "el-icon-arrow-left"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    switchMenu(){
      const b = !this.isMenuOpen;
      if (b){
        this.menuIcon = "el-icon-arrow-right"
      }else {
        this.menuIcon = "el-icon-arrow-left"
      }
      this.isMenuOpen = b
      this.$emit('is-open', !b)
    },
    changeView: function (page) {
      // 触发父级组件事件this.$emit
      this.$emit('change-page', page);
      console.log(page)
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
