<template>
  <div id="app">
    <Header msg="脑阔"></Header>
    <div class="row">
      <Menu class="menu" v-on:change-page="changePage"></Menu>
      <Devices v-if="currentPage === 'devices'" class="dataContent" type="cloud phone" count="32" account="we"></Devices>
    </div>
    <Footer msg="jiojio"></Footer>
  </div>
</template>

<script>
import Devices from "./page/devices/Devices";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Devices,
    Footer
  },
  data(){
    return{
      currentPage: "devices"
    }
  },
  methods: {
    changePage: function (value){
      this.currentPage = value
      console.log(this.currentPage)
    }
  }
}
</script>

<style>
html, body, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  /*padding-top: 10px;*/
}

.menu {
  float: left;
  width: 25%;
}

.dataContent {
  float: left;
  width: 75%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
