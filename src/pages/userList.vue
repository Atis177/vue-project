<template>
    <div>
        <h3>Список пользователей</h3>

        <rows-per-page
                :users.sync="users"
                :selectedPerPage.sync="selectedPerPage"
                :currentPage.sync="currentPage"
                :usersCount.sync="usersCount"
                :pagesCount.sync="pagesCount"/>

        <div v-if="!users.length" class="alert alert-warning">
            Загрузка...
        </div>
        <user-table v-else v-bind:users="users"></user-table>

        <rows-paginator
                :users.sync="users"
                :selectedPerPage.sync="selectedPerPage"
                :currentPage.sync="currentPage"
                :usersCount.sync="usersCount"
                :pagesCount.sync="pagesCount"
        />
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
                currentPage: null,
                selectedPerPage: null,
                usersCount: null,
                pagesCount: 1
            }
        },

        methods: {
            loadData: function() {
                axios.get(this.restUrl).then(({data}) => {
                    this.users = data;
                    this.usersCount = data.length;
                });
            }
        },

        mounted: function(){
            this.loadData()
        }
    }
</script>