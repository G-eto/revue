<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          {{content.id}}
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          {{content.content}}
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          {{content.date}}
        </div>
      </el-col>
    </el-row>
  </div>
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