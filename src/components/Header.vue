<template>
  <div class="background">
    <p>This is header area, {{msg}}</p>
    <hr class="background">
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
}
</script>

<style scoped>

div.background {
  padding-top: 20px;
  text-align: center;
  background: white;
}
hr.background {
  background: lightgray;
  height: 2px;
}
</style>
