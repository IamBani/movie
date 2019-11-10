<template>
    <div class="box">
        <el-row style="width:300px"> 
            <el-col :span="24">
                <el-input 
                    placeholder="请输入内容"
                    v-model="input"
                    clearable @keydown.enter.native="login">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
            </el-col>
        </el-row>
        <el-row style="width:300px">
            <el-col :span="24" class="psw">
                <el-input 
                  placeholder="请输入密码" 
                  v-model="password" 
                  show-password @keyup.enter.native="login">
                  <i slot="prefix" class="el-input__icon el-icon-goods"></i>
                </el-input>
            </el-col>
        </el-row>    
            <el-row style="width:300px">
                <el-col :span="24" class="psw">
                  <el-button type="primary" style="width:100%" :loading="flge" @click="login()">登录</el-button>
                </el-col> 
            </el-row>
            <div style="width:300px;font-size:18px;color: #fff;">账号admin 密码123456</div>
    </div>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
    name:"loginnow",
    data(){
        return{
            input:"",
            password:"",
            boo:true,
            flge:false
        }        
    },
    methods:{
        login(){
            if(this.input==""||this.password==""){
                 if(this.boo){
                    this.boo=false;
                    this.$message({
                        message: '账号和密码不能为空',
                        type: 'warning'
                    });
                    setTimeout(()=>{
                        this.boo=true;
                    },3000)
                }
            }else{
                this.get();
                this.flge=true;
            }
        },
        get(){
            NProgress.start();
            let url=`${this.$url.url}/login`;
            this.$http({
               url:url,
                method: 'post',
            data:{
                user: this.input,
                password:this.password
            },
             onUploadProgress: (progressEvent) => {
            // 使用本地 progress 事件
            console.log(progressEvent);
            if (progressEvent.lengthComputable) {
                console.log(Math.round((progressEvent.loaded / progressEvent.total) * 100)); // 使用某种 UI 进度条组件会用到的百分比
                }
                //  console.log(Math.round(progress.loaded / progress.total * 100) + '%');
             }
            }).then((response)=>{
                 NProgress.done();
                if(response.data.success=="1"){
                   this.$message({
                        message: '登陆成功',
                        type: 'success'
                    });
                    this.setCookie({name:this.input,token:response.data.token});
                    this.$store.commit('username',this.input);
                    this.$router.push({ path:'/home/page'})
                }else{
                    this.$message.error('您的账号和密码有误');
                    this.password="";
                     this.flge=false;
                }
            }).then((err)=>{
                NProgress.done();
            })
        },
        setCookie(value){
            let date=new Date();
            let daynum = date.getTime() + 1*24*60*60*1000;
           // let daynum = date.getTime() + 2*60*1000;
            date.setTime(daynum);
            document.cookie = 'name='+value.name+';'+'expires='+date.toGMTString();
            document.cookie ='token='+value.token+';'+'expires='+date.toGMTString();
        }
    }
}
</script>

<style lang="scss" scoped>
    .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .psw{
         margin-top:10px; 
        }
</style>