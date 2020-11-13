<template>
  <div class="list">
    Devices number:{{count}}
    Device type:{{type}}
    <ol>
      <li v-for="(a, item) in account" :key="a">
        account: {{a}} {{item}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Devices",
  props: {
      count: String,
      type: String,
      account: String
    }
}
</script>

<style scoped>
.list{
  min-height:80vh;
}
</style>
