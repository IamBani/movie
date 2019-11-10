// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles';
import axios from "axios";
import herd from "@/components/herd/herd";
import setup from "@/components/order/setup";
import order from "@/components/order/order";
import url from "./assets/js/url";
import echarts from "echarts";
import Cook from "./assets/js/cookie";
import store from "./vuex/store"

console.log(router);
router.beforeEach((to, from, next) => {
  if(to.path==="/"){
    next();
  }else{
    if(new Cook().getCookie("token")){
      console.log(to);
      next();
    }else{
      next({path:"/"});
    }
  }
})




// axios.defaults.retry = 4;
// axios.defaults.retryDelay = 1000;

// axios.interceptors.response.use(function(res) {
//   if (res.data === '' || res.data.length === 0 || res.data === 'undefined' || res.data === undefined) {
//     console.log('后台传来的data为空/为undefined')
//   }
//   //   2.错误提示(前提是接口跑通了，只是对里边某些值做下详细判断。要先跟后台商定好，对某个固定的字段进行判断，并且确定固定字段来承接 错误信息，方便展示)
//   // if (res.data && !res.data.success) {
//   //  console.log(res.data.error.message)
//   // }
//   // console.log(res.data);
//   if(res.data.status==false){
//       router.replace({
//         path: '/',
//         // query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
//     })
//     return;
//   }else{
//     return res
//   }
// }, error => {
//   // 请求错误时做些事(接口错误、超时等)

//   // 关闭loadding
//   // store.commit('CONTROL_LOADDING', false)
//   // console.log(error) // 打开控制台，可以看到error包含了几个对象:message, config, code, request, response,可以拿来请求超时等问题

//   //  1.判断请求超时
//   if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
//     // console.log('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案')
//     // return service.request(originalRequest);//例如再重复请求一次
//   }
//   //  2.需要重定向到错误页面
//   const errorInfo = error.response
//   // console.log(errorInfo)
//   if (errorInfo) {
//     // error =errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
//     if (errorInfo.status === 403) {
//       router.push({
//         path: '/error/403'
//       })
//     }
//     // if (errorInfo.status === 500) {
//     //   router.push({
//     //     path: "/error/500"
//     //   });
//     // }
//     // if (errorInfo.status === 502) {
//     //   router.push({
//     //     path: "/error/502"
//     //   });
//     // }
//     // if (errorInfo.status === 404) {
//     //   router.push({
//     //     path: "/error/404"
//     //   });
//     // }
//   }
//   return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
// });

Vue.component("order",order);
Vue.component("setup",setup);
Vue.component("herd",herd);
Vue.use(ElementUI);
Vue.use(VueParticles);
Vue.prototype.$url=url;
Vue.prototype.$http=axios;
Vue.prototype.$echarts=echarts;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    eventHub: new Vue()
  }
})
