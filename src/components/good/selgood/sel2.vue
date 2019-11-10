<template>
<div>
  <h2 style="background-color:pink;width:200px;height:200px; color:#fff;">who are you?</h2>
  <el-button type="primary" @click="changeactive">主要按钮++</el-button>
  <el-button type="success" @click="changetive">主要按钮--</el-button>
  <input type="text" v-model="b">
</div>
</template>

<script>
export default {
    name:"sel2",
    data(){
        return{
            n:"",
            b:""
        }
    },
    created(){
         this.$root.eventHub.$on('updatemsg',(num) => {
                this.n=num;
            });
    },
    methods:{
        changeactive(){
           var num=++this.n;
           this.$emit("changedow",num); 
           this.$root.eventHub.$emit("updatemsg", num);
        },
        changetive(){
            var num=--this.n;
            this.$emit("changeup",num); 
            this.$root.eventHub.$emit("updatemsg", num);
        }
    }
}
</script>

<style>

</style>