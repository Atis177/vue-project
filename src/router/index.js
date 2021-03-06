import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
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
        },
        {
            path: '/user/add',
            component: () => import('@/pages/userAdd.vue')
        }
    ]
})
