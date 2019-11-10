<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-zoom-in"></i>筛选搜索
        </span>
        <el-row :gutter="20">
          <el-col :span="6" :offset="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="输入搜索">
                <el-input v-model="formInline.search" placeholder="商品名称"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="商品货号">
                  <el-input v-model="formInline.productcode" placeholder="商品货号"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="商品分类">
                <el-cascader
                    v-model="formInline.value"
                    :options="options"
                    @change="handleChange">
                </el-cascader>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="商品品牌">
                <el-input v-model="formInline.brand" placeholder="商品品牌"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="上架状态">
                <el-select v-model="formInline.uppershelf" placeholder="全部">
                  <el-option label="上架" value="上架"></el-option>
                  <el-option label="下架" value="下架"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6" :offset="1">
             <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="审核状态">
                <el-select v-model="formInline.examine" placeholder="全部">
                  <el-option label="审核通过" value="审核通过"></el-option>
                  <el-option label="未审核" value="未审核"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-form  class="demo-ruleForm" label-width="120px">
            <el-form-item>
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button @click="resetForm()">重置</el-button>
            </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import data from "../../assets/js/data.js";
export default {
  name: "good",
  data() {
    return {
        msg: data,
        options:[],
        formInline: {
            search:"",  
            brand: "",
            productcode:"",
            examine:"",
            uppershelf:"",
            value:""
          },  
        }
    },
    created(){
        var obj={},children;
        data.obj.forEach((item)=>{
            obj.value=item.name;
            obj.label=item.name;
            if(Array.isArray(item.arr)){
                var objb={};
                 children=[];
               item.arr.forEach((it)=>{
                   objb.value=it;
                   objb.label=it;
                  children.push(objb);
                  objb={};
               })
               obj.children=children;
            }
            this.options.push(obj);
            obj={};
        })
    },
  methods: {
    submitForm() {
     console.log(this.formInline);
    },
    resetForm(){
       Object.keys(this.formInline).forEach((item)=>{
            this.formInline[item]="";
        })
    },
    handleChange(){
      console.log(this.formInline.value[this.formInline.value.length-1]);
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  height: 50px;
  background-color: #f40;
  color: #fff;
  width: 200px;
}
</style>