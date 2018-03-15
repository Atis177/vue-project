<template>
    <div>
        <h3>Список пользователей</h3>

        <rows-per-page
                :selectedPerPage="selectedPerPage"
                @changePerPage="changePerPage"/>

        <div v-if="!users.length" class="alert alert-warning">
            Загрузка...
        </div>
        <user-table v-else :users="users"></user-table>

        <rows-paginator
                v-model="currentPage"
                :usersCount="usersCount"
                :selectedPerPage="selectedPerPage"
                @changeNumberPage="changeNumberPage"/>
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
                selectedPerPage: 5,
                currentPage: 1,
                usersCount: 0
            }
        },

        mounted: function(){
            this.loadData()
        },

        methods: {
            loadData: function() {
                axios.get(`${this.restUrl}?_limit=${this.selectedPerPage}&_page=${this.currentPage}`)
                    .then((response) => {
                        this.users = response.data;
                        this.usersCount = parseInt(response.headers['x-total-count'], 10);
                    });
            },

            changePerPage: function(value) {
                this.selectedPerPage = parseInt(value, 10);
                this.loadData();
            },

            changeNumberPage: function(value) {
                this.currentPage = value;
                this.loadData();
            }
        }
    }
</script>