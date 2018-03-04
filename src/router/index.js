import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import UsersPage from '@/pages/userList.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/users',
            name: 'users',
            component: UsersPage
        }
    ]
})
