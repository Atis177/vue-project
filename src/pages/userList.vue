<template>
    <div>
        <h3>Список пользователей</h3>

        <rows-per-page
                :users.sync="users"
                :currentPage.sync="currentPage"
                :selectedPerPage.sync="selectedPerPage" />

        <div v-if="!users.length" class="alert alert-warning">
            Загрузка...
        </div>
        <user-table v-else v-bind:users="users"></user-table>

        <rows-paginator :users.sync="users" :currentPage.sync="currentPage" :selectedPerPage.sync="selectedPerPage"></rows-paginator>
    </div>
</template>

<script>
    import axios from '@/axios.js'

    export default {
        name: 'UsersListPage',

        components: {
            userTable : () => import('@/components/userTable.vue'),
            rowsPaginator : () => import('@/components/rowsPaginator.vue'),
            rowsPerPage : () => import('@/components/rowsPerPage.vue')
        },

        data: function() {
            return {
                users: [],
                restUrl: '/users',
                currentPage: '',
                selectedPerPage: ''
            }
        },

        methods: {
            loadData: function() {
                axios.get(this.restUrl).then(({data}) => {
                    this.users = data
                });
            }
        },

        mounted: function(){
            this.loadData()
        }
    }
</script>