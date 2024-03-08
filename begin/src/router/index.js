import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'

import moblie from '@/views/Mobile.vue'
Vue.use(Router)
// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)
const router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '数字健康平台'
      },
      component: _import('index')
    },
    {
      path: '/homepage',
      name: 'homepage',
      meta: {
        title: '首页'
      },
      component:  _import('catalogue/homepage')
    },
    {
      path: '/Mobile',
      name: 'Mobile',
      meta: {
        title: '提示'
      },
      component: _import('Mobile')
    },
    {
      path: '/community',
      name: 'community',
      meta: {
        title: '社区'
      },
      component: _import('catalogue/Community')
    },
    {
      path: '/userinfo',
        name: 'userinfo',
      meta: {
      title: '个人中心'
    },
      component:  _import('catalogue/userinfo'),
     children:[
  ]
    },
    {
      path: '/userlist',
      name: 'userlist',
      meta: {
        title: '个人中心2'
      },
      component:  _import('catalogue/userlist')
    },
    {
      path: '/demo',
      name: 'demo',
      meta: {
        title: '个人中心'
      },
      component: _import('catalogue/demo')
    }
  ]
})


router.beforeEach((to, from, next) => {
  console.log('来自'+from.path)
  console.log('去往'+to.path)
  if (to.meta.title) { // 如果设置了标题，拦截后设置标题
    document.title = to.meta.title;
  } else {
    document.title = from.meta.title;
  }

  if (window.innerWidth >=800 &&to.path === '/moblie') {
    console.log("我要去pc端了")
    next('/');
  }
  else if(window.innerWidth<800  &&to.path !== '/moblie'){
    console.log('我要去移动端了')
    next('/moblie');
  }
   else next()
});
// window.addEventListener('resize', () => {
//   // 如果窗口宽度发生变化
//   if (window.innerWidth <800) {
//     // 更新存储的窗口宽度
//     // 手动触发一次路由检查
//     router.push(router.currentRoute);
//   }
// });
  // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  // if (isMobile&&to.path!='/Mobile') {
  //   next('/Mobile')
  //   console.log('----------------------')


// router.beforeEach((to,from,next)=>{
//   if(window.innerWidth<800){
//    next('/moblie')
//   }
//     else next()
//
// })

// router.beforeEach((to, from, next) => {
//   // 设置全局过渡效果
//   if (to.name !== from.name) {
//     // 如果路由发生了变化，可以在这里设置过渡效果的逻辑
//     // 例如，可以在这里手动添加一个全局的过渡效果
//     document.body.classList.add('route-transition');
//   } else {
//     // 如果路由没有发生变化，清除过渡效果
//     document.body.classList.remove('route-transition');
//   }
//   next();
// });
export default router
