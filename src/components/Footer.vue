<template>
  <div class="footer">
    This is footer area {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  height: 80px;
  line-height: 80px;
  margin-top: -20px;
  background: #409EFF;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
</style>
