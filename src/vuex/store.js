import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
    user:"",
    list:[]
}
const mutations={
    increment (state, n) {
      state.list.push(n);
    },
    username(state,name){
      state.user=name;
    }
  }
const store =  new Vuex.Store({
    state,
    mutations
 });;
 
export default store;