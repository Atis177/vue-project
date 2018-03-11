import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/pages/index.vue')
        },
        {
            path: '/users',
            name: 'users',
            component: () => import('@/pages/userList.vue')
        },
        {
            path: '/user/edit/:id',
            component: () => import('@/pages/userEdit.vue')
        }
    ]
})
