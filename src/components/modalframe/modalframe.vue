<template>
     <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :show-close="true"
            :before-close="beforeclo"
            width="30%"
            >
           <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.rank"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.num"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.nuit"></el-input>
                </el-form-item>
                 <el-form-item label="即时配送">
                    <el-switch v-model="formLabelAlign.on"></el-switch>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="changetab">确 定</el-button>
            </span>
         </el-dialog>
</template>

<script>
export default {
    props:{
        dialogVisible:Boolean,
        formLabelAlign:Object
    },
    name:"modalframe",
    data(){
        return{
             dialogble:this.dialogVisible
        }
    },
    created(){
      console.log(this.dialogVisible);
    },
    methods:{
       changetab(){
           this.dialogble=!this.dialogble;
          console.log(this.formLabelAlign);
           console.log(this.dialogble);
       },
       beforeclo(){
            this.dialogble=!this.dialogble;
             console.log(this.dialogble);
       }
    },
    components:{
        
    }
}
</script>

<style>

</style>