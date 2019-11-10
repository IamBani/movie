<template>
  <div>
    <el-tabs type="border-card"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 商品分类
        </span>
        <tab
          :tableData="tableData"
          :changeSwitch="changeSwitch"
          :handleCurrentChange="handleCurrentChange"
          :handleEdit="handleEdit"
          :handleDelete="handleDelete"
        ></tab>
        <el-pagination class="pagination" 
         background 
         layout="total,sizes, prev, pager, next,jumper" 
         :total="addnum" :pager-count="5" 
         :page-sizes="[5,10,20]"  
         :page-size="page_size"
          @size-change="handleSizeChange"
          @current-change="CurrentChange">
         </el-pagination>
      </el-tab-pane>
      <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
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
                <el-button type="primary" @click="dialogVisible = false, changetab">确 定</el-button>
            </span>
         </el-dialog>
    </el-tabs>
  </div>
</template>

<script>
import tab from "./tab/tab";
export default {
  name: "classification",
  data() {
    return {
      labelPosition: 'right',
      dialogVisible: false,
      currentPage4:"5",
      page_num:1,
      page_size:5,
      addnum:0,
      tableData: [],
      currentRow: null,
      loading:true, 
      index:"",
      token:"",
      formLabelAlign: {
          name: '',
          rank: '',
          num: '',
          nuit:"",
          on:"",
        }
    };
  },
  created(){
     this.page();
  },
  methods: {
      CurrentChange(val){
          this.page(val,this.page_size);
          this.page_num=val;
      },
       handleSizeChange(v){
           this.page(this.page_num,v);
           this.page_size=v;
      },
    handleDelete(index, row) {
       console.log(index, row)
    },
    handleCurrentChange(val) {
         console.log(val);
    },
    handleEdit(index, row) {
        console.log(index, row)
        this.index=index;
        this.dialogVisible=true;
        this.formLabelAlign=row;
    },
    changeSwitch(index, row) {
        console.log(index, row)
    },
      changetab(){
          this.tableData[this.index]=this.formLabelAlign;
      },
    page(page=1,page_size=5){
        this.loading=true;
          let url=`${this.$url.url}/classification`;
        //   console.log(page);
        //   console.log(page_size);
       this.token=this.getCookie("token");
        this.$http.get(url,{
          params:{
             page: page,
             page_size:page_size,
             token:this.token
             }
        }).then((response)=>{
            console.log(response);
            if(response==""||response==null||response==undefined){
              return
            }
            this.tableData=response.data[1];
            this.addnum=response.data[0][0].num;
            this.loading=false;
            // console.log(this.addnum);
        })
    },
      getCookie(cookieName){
                  var strCookie = document.cookie;
                  var arrCookie = strCookie.split("; ");
                  for(var i = 0; i < arrCookie.length; i++){
                      var arr = arrCookie[i].split("=");
                      if(cookieName == arr[0]){
                          return arr[1];
                      }
                  }
                  return "";
              },
  },
  components: {
    tab
  }
};
</script>

<style lang="scss" scoped>
.pagination{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    margin-top:10px; 
}
</style>