import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
      component:()=>import('@/components/herd/herd'),
      children:[{
        path:'page',
        name:'page', 
      //   meta: {
      //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      // },
        component: ()=>import('@/components/homepage/homepage')
      }]
    },
    {
      path: '/herd',
      name: 'herd',
      component: ()=>import('@/components/herd/herd'),
      children:[{
          path: 'good',
          name: 'good',
          component: ()=>import('@/components/good/good')
      }, {
        path: 'sel',
        name: 'sel',
        component: ()=>import('@/components/good/sel')
      },{
        path: 'classification',
        name: 'classification',
        component: ()=>import('@/components/good/classification')
      }
    ]},
    {
      path: '/homepage',
      name: 'homepage',
      component: ()=>import('@/components/herd/herd'),
      children:[{
          path: 'setup',
          name: 'setup',
          component: ()=>import('@/components/order/setup')
      }, {
        path: 'order',
        name: 'order',
        component: ()=>import('@/components/order/order')
      },
    ]},
   
  ]
})
