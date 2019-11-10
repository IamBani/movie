<template>
  <div>
    <el-row>
      <el-col :span="15" :offset="4" >
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <sel1 class="sel3" :num="active" v-show="active==0" @changeboo="abc"></sel1>
        <sel2 class="sel3"  v-show="active==1" @changedow="sel2dow" @changeup="sel2up"></sel2>
        <sel3 class="sel3"  v-show="active==2" @change3up="sel3up"></sel3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import sel1 from "@/components/good/selgood/sel1";
import sel2 from "@/components/good/selgood/sel2";
import sel3 from "@/components/good/selgood/sel3";
export default {
  name: "sel",
  data() {
    return {
      mag: "这是select",
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    abc(e){
        this.active=e;
    },
    sel2dow(e){
        this.active=e;
    },
    sel2up(e){
        this.active=e;
    },
    sel3up(e){
        this.active=e;
    }
  },
  components: {
    sel1,
    sel2,
    sel3
  }
};
</script>

<style lang="scss" scoped>
.sel3{
    margin-top: 20px;
}
</style>