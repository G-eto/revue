<template>
  <el-container>
    <el-header>
      <div class="top left">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">全部</el-menu-item>
          <el-menu-item index="2">类型1</el-menu-item>
          <el-menu-item index="3">类型2</el-menu-item>
        </el-menu>
      </div>
      <div class="top right">
        <el-button icon="el-icon-search"></el-button>
      </div>
      <div class="top right">
        <el-input v-model="keyword" placeholder="可以使用id、账号查询"></el-input>
      </div>
    </el-header>
    <el-main>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection"></el-table-column>
          <el-table-column type="expand">
            <div slot-scope="prop">
              <DeviceTableExpend v-bind:content="prop.row"></DeviceTableExpend>
            </div>
          </el-table-column>
          <el-table-column label="ID" prop="id"></el-table-column>
          <el-table-column label="类型1" prop="desc"></el-table-column>
          <el-table-column label="类型2" prop="name"></el-table-column>
          <el-table-column label="账号" prop="cdk"></el-table-column>
          <el-table-column label="密码" prop="name"></el-table-column>
          <el-table-column label="位置" prop="content"></el-table-column>
          <el-table-column label="状态" prop="date"></el-table-column>
          <el-table-column label="详情">
            <div  slot-scope="prop">
              <a class="el-icon-link" :href=getDetailUrl(prop.row.id)></a>
            </div>
          </el-table-column>
        </el-table>
      </div>
    </el-main>

  </el-container>
</template>

<script>

import DeviceTableExpend from "@/page/devices/DeviceTableExpend";
import axios from "axios";

export default {
  name: "Devices",
  components: {DeviceTableExpend},
  props: {
    activeName: String("first"),
    activeIndex: String,
    keyword: String,
    count: String,
    type: String,
    account: String
  },
  data() {
    return {
      tableData: null
  }
  },
  mounted () {
    axios({
      method: 'get',
      url: '/data.json',
    })
        .then(response => (this.tableData = response.data.CDK))
        .catch(function (error) { // 请求失败处理
           console.log(error);
        });
  },
  methods: {
    getDetailUrl(id){
      return "/devices/info?"+id;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.tableData)
      if (key === "2"){
        axios
            .get('/data.json')
            .then(response => (this.tableData = response.data.CDK))
            .catch(function (error) { // 请求失败处理
              console.log(error);
            });
      }
      else if (key === "3"){
        this.tableData = [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10313'
        },
          {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10313'
          }]
      }
    }
  }
}
</script>

<style scoped>
.top{
  margin-top: 10px;
  margin-left: 20px;
}
.top.left{
  float: left;
}
.top.right{
  float: right;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
