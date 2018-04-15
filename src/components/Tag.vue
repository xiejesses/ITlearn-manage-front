<template>
  <div class="tag">
      <h3>添加标签</h3>
      <el-input v-model="inputTag" placeholder="请输入标签名" style="width:180px"></el-input>
      <span>添加</span>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="80">
      </el-table-column>
      <el-table-column prop="name" label="标签名" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
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
        name: 'vue',
      }
      return {
        tableData: Array(10).fill(item),

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
    padding: 5px 10px;
    color: white;
    background-color: #2eb279;
}

</style>
