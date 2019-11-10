<template>
   <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%"
          border
        >
          <el-table-column type="index" align="center"  label="编号"></el-table-column>
          <el-table-column property="name" align="center" label="分类名称" ></el-table-column>
          <el-table-column property="rank" align="center" label="级别" ></el-table-column>
          <el-table-column property="num" align="center" label="商品数量" ></el-table-column>
          <el-table-column property="nuit" align="center" label="数量单位"></el-table-column>
          <el-table-column property="num" align="center" label="是否显示">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.on"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changeSwitch(scope.$index, scope.row)"
                @click="handleDelete(scope.$index, scope.row)"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column property="num" align="center" label="设置">
            <template slot-scope="scope">
              <el-button size="mini">查看下级</el-button>
            </template>
          </el-table-column>
          <el-table-column property="num" align="center" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
     </el-table>
</template>

<script>
export default {
    props:{
        tableData:Array,
        changeSwitch:Function,
        handleCurrentChange:Function,
        handleEdit:Function,
        handleDelete:Function
    },
    name:"tab",
    data(){
        return{
           
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>