<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="createDateTime" label="创建日期" sortable width="180" :formatter="formatDate">
      </el-table-column>
      <el-table-column prop="user.nickname" label="创建者" width="180">
      </el-table-column>
      <el-table-column prop="content" label="评论" >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="deleteComment(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="count">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    data() {
      return {
        page: 1,
        pageSize: 10,
        tableData: [],
        pageSum: 1,
        count: 0,
      }
    },
    mounted() {
      this.fetchComment();
      this.getCommentCount();
    },
    methods: {
      // 获取用户
      fetchComment() {
        let params = {page: this.page, page_size: this.pageSize};
        this.$http.get(this.$config.comment.url, {params: params})
          .then(response => {
            let res = response.data;
            if (res.status === this.$status.success) {
              this.tableData = res.data;
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(
            err => this.$message.error(err.response.data.message)
          );
      },

      // 获取用户数
      getCommentCount() {
        this.$http.get(this.$config.comment.count.url)
          .then(response => {
            let res = response.data;
            if (res.status === this.$status.success) {
              this.count = res.count;
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(
            err => this.$message.error(err.response.data.message)
          );
      },

      // 处理当前页
      handleCurrentChange(page){
        this.page = Number(page);
        this.fetchComment();
      },

      // 点击打开
      formatDate(row){
        return this.moment(new Date(row.createDateTime), 'YYYYMMDDHHmmss').fromNow();
      },

      // 删除评论
      deleteComment(_id) {
        let params = {_id: _id};
        this.$http.delete(this.$config.comment.url, {params: params})
          .then(response => {
            if (response.status === 204) {
              this.fetchComment();
              this.$message.success("删除成功");
            } else {
              this.$message.error("删除失败");
            }
          })
          .catch(
            err => this.$message.error(err.response.data.message)
          );
      },
    }
  }

</script>
<style scoped>


</style>
