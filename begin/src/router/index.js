import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'

Vue.use(Router)

const router= new Router({
  routes: [
    {path:'/', redirect:'/home'},
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: ()=>import('@/views/catalogue/homepage')
    }
  ]
})
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
