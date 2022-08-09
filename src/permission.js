import router from '@/router/index.js'
import store from '@/store/index.js'

// 通过路由守卫控制页面跳转
// 跳转之前 - 前置守卫
router.beforeEach((to, from, next) => {
    // to- 去哪里的路由
    // from-从哪里来的信息
    // next-是否允许访问
    // 白名单里面的路由可以直接访问
    if (['/login', '/404'].includes(to.path)) {
        return next()
    }
    // 如果没有token，不允许访问，并且跳转回登录页
    if (store.state.user.token) {
        next()
    } else {
        next('/login')
    }
   
})
// 跳转之后 - 后置守卫
router.afterEach( (to,from) => {
   
})