<template>
  <h2>{{mag}}</h2>
</template>

<script>
export default {
    name:"setup",
    data(){
        return{
            mag:"setup"
        }
    }
}
</script>

<style lang="scss" scoped>
    h2{
        height: 50px;
        widows: 200px;
        background-color:pink;
        color: #fff; 
    }
</style>