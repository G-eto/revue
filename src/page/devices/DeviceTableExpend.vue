<template>
  <el-form label-position="left" inline class="demo-table-expand">
    <el-form-item label="商品名称">
      <span>{{ content.id }}</span>
    </el-form-item>
    <el-form-item label="所属店铺">
      <span>{{ content.shop }}</span>
    </el-form-item>
    <el-form-item label="商品 ID">
      <span>{{ content.id }}</span>
    </el-form-item>
    <el-form-item label="店铺 ID">
      <span>{{ content.shopId }}</span>
    </el-form-item>
    <el-form-item label="商品分类">
      <span>{{ content.category }}</span>
    </el-form-item>
    <el-form-item label="店铺地址">
      <span>{{ content.address }}</span>
    </el-form-item>
    <el-form-item label="商品描述">
      <span>{{ content.desc }}</span>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "DeviceTableExpend",
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>