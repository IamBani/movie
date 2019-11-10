<template>
    <div>
      <div>
         <vue-particles color="#dedede"></vue-particles>
      </div>
      <div><loginnow></loginnow></div>
    </div>
</template>

<script>
import loginnow from "./loginnow";
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    loginnow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #particles-js{
    background-image: url("../../assets/img/sky.jpg");
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box; 
    display: inline-block;
  }
</style>
