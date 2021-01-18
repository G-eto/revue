<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header msg="hhh"></Header>
      </el-header>
      <el-container>
        <el-aside v-bind:width=menuWidth>
          <MainMenu v-on:change-page="changePage" v-on:is-open="isMenuOpen"></MainMenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <Devices v-if="currentPage === 'devices'" type="cloud phone" count="32" account="we"></Devices>
          <doc v-if="currentPage === 'docs'" msg="doc"></doc>
          <manage v-if="currentPage === 'manager'" msg="admin"></manage>
          <overview v-if="currentPage === 'overview'" msg="ov"></overview>
        </el-main>
      </el-container>
      <div :style="{minHeight: minHeight + 'px'}"></div>
      <el-footer>
        <Footer msg="jio jio"></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

import MainMenu from "@/components/MainMenu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Devices from "@/page/devices/Devices";
import overview from "@/page/ov/overview";
import doc from "@/page/doc/doc";
import manage from "@/page/manage/manage";

export default {
  name: 'App',
  components: {MainMenu, Footer, Header, Devices, overview, doc, manage},
  data(){
    return{
      currentPage: "overview",
      minHeight: 0,
      menuWidth: "140px"
    }
  },
  comments: {
    Devices,
    MainMenu,
    Header,
    Footer
  },
  methods: {
    changePage: function (value){
      this.currentPage = value
      let high = 550;
      if (this.currentPage === "devices"){
        high = 570
      }
      this.setFooter(high)
      console.log(this.currentPage)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    isMenuOpen(open){
      this.menuWidth = open ? "140px" : "48px"
    },
    setFooter(high){
      this.minHeight = document.documentElement.clientHeight - high
      if (this.minHeight < 0)
        this.minHeight = 0
      console.log(this.minHeight)
    }
  },
  mounted(){
    this.setFooter()
  }
}
</script>

<style>
</style>
