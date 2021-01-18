<template>
  <el-row :gutter="20">
    <el-input :span="12" v-model="input" placeholder="请输入内容"></el-input>
    <el-button :span="6" icon="el-icon-search" circle v-bind:href=url></el-button>
  </el-row>
</template>

<script>
export default {
  name: "DeviceDetail",
  data() {
    return {
      input: '',
      url: 'https://baidu.com'
    }
  }
}
</script>

<style scoped>

</style>