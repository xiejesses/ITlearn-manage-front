<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="发表日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="title" label="标题" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: 'JavaScript', value: 'JavaScript' }, { text: 'Node', value: 'Node' },{ text: 'Vue', value: 'Vue' }]"
        :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="'success'" close-transition>{{scope.row.tag}}</el-tag>
        </template>
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
          title: '能让你开发效率翻倍的 VSCode 插件配置',
          href: 'www.google.com',
          tag: 'JavaScript'
        }, {
          date: '2016-05-04',
          name: '你老板',
          title: 'vue父子组件间传值(props)',
          href: 'www.google.com',
          tag: 'Vue'
        }, {
          date: '2016-05-01',
          name: '李四',
          title: '一个小黄网的手动入侵过程',
          href: 'www.google.com',
          tag: 'Vue'
        }, {
          date: '2016-05-03',
          name: '啊狗',
          title: '从 0 开始了解 Docker',
          href: 'www.google.com',
          tag: 'Node'
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
