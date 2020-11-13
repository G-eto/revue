<template>
  <div class="background">
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
div.background {
  text-align: center;
  background: #ddd;
  margin-top: 20px;
  height: 100px;
}
</style>
