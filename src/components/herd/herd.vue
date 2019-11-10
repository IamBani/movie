<template>
    <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246); position:fixed;top:0;button:0;left:0;height:100%;">
    <el-menu  @open="handleOpen" @close="handleClose"  @select="handleSelect" active-text-color="#409EFF" background-color="#304156" text-color="#fff" style="height:100%;" :default-active="activeIndex"  router>
       <el-menu-item index="/home/page">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-c-scale-to-original"></i>
          商品
        </template>
         <el-menu-item index="/herd/good"><i class="el-icon-menu"></i>商品列表</el-menu-item>
         <el-menu-item index="/herd/sel"><i class="el-icon-circle-plus-outline"></i>添加商品</el-menu-item>
         <el-menu-item index="/herd/classification"><i class="el-icon-present"></i>商品分类</el-menu-item>
         <el-menu-item index="/herd/good"><i class="el-icon-film"></i>商品类型</el-menu-item>
         <el-menu-item index="/herd/good"><i class="el-icon-discount"></i>品牌管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item index="/homepage/order">选项1</el-menu-item>
          <el-menu-item index="/homepage/setup">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container style="position: absolute;left:200px;right:0">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{name}}</span>
    </el-header>
    
    <el-main> 
      <el-tabs v-model="editableTabsValue" type="card" editable> <!-- @edit="handleTabsEdit">-->
  <el-tab-pane
    v-for="(item,index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
  <div v-html="item.content"></div>
  <!-- <component v-bind:is="item.content" ref="child"></component> -->
  </el-tab-pane>
</el-tabs>
<component v-bind:is="setup" ref="child"></component>
    <router-view></router-view>
     
    </el-main>
  </el-container>
</el-container>
 
</template>

<script>
export default {
    name:"herd",
    data() {
      return {
       setup:"setup",
        activeIndex:"",
         editableTabsValue: '1',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: '<h2>你好</h2>'
        }],
        tabIndex: 2
      }
    },
    created(){
      this.name=this.getCookie("name");
      this.activeIndex=this.$route.fullPath;
    },
    methods:{
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
          handleOpen(key, keyPath) {
            // console.log(key, keyPath);
          },
           handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleSelect(key, keyPath){
            //  console.log(key, keyPath);
            //  this.activeIndex=keyPath[1];
        }
    },
    watch:{
      $route() {
         //this.handleSelect(this.activeIndex);
          // console.log(this.$route);
          this.activeIndex=this.$route.fullPath;
      }
    }
}
</script>

<style lang="scss" scoped>
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .el-menu-item{
    background-color:#1f2d3d!important;
  }
</style>