<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="80">
      </el-table-column>
      <el-table-column prop="date" label="注册时间" width="180">
      </el-table-column>
      <el-table-column prop="name" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data() {
      const item = {
        id: '1',
        date: '2016-05-02',
        name: '王小虎',
        email: '123@qq.com'
      }
      return {
        tableData: Array(30).fill(item),

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
