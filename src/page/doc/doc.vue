<template>
  <div>
    documents
    {{ioc}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "doc",
  data() {
    return {
      ioc: null
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'http://localhost:8080/v1/test',
    })
        .then(response => (this.ioc = response.data.message))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
  },
}


</script>

<style scoped>

</style>