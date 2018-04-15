<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="创建日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="创建者" width="180">
      </el-table-column>
      <el-table-column prop="title" label="小组名" :formatter="formatter">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">通过</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          title: 'vue 了解下',
          href: 'www.google.com',
        }, {
          date: '2016-05-04',
          name: '你老板',
          title: '正则不正则',
          href: 'www.google.com',
        }, {
          date: '2016-05-01',
          name: '李四',
          title: '入门到放弃',
          href: 'www.google.com',
        }, {
          date: '2016-05-03',
          name: '啊狗',
          title: '从 0 开始了解',
          href: 'www.google.com',
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.title;
      },
      filterTag(value, row) {
        return row.tag === value;
      },

    }
  }

</script>
<style scoped>


</style>
