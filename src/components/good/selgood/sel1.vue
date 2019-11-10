<template>
    <div>
      <h2 style="background-color:#f40; height: 100px; width:100px">what is you name?</h2>
       <el-button type="primary" @click="changeactive">主要按钮</el-button>
       <input type="text" v-model="a">
    </div>
</template>

<script>
export default {
    name:"sel1",
    props:{
       "num":Number
    },
    data(){
        return{
            n:this.num,
            a:""
        }
    },
    created(){
        this.$root.eventHub.$on("updatemsg",(num)=>{
           this.n=num;
        }) 
    },
    methods:{
        changeactive(){
           var num=++this.n;
           this.$emit("changeboo",num); 
           this.$root.eventHub.$emit("updatemsg", num);
        }
    }
}
</script>

<style>

</style>