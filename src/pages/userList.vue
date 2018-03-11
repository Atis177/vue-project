<template>
    <div>
        <h3>Список пользователей</h3>

        <div v-if="!users.length" class="alert alert-warning">
            Загрузка...
        </div>

        <user-table v-else v-bind:users="users"></user-table>
    </div>
</template>

<script>
    import axios from '@/axios.js'

    export default {
        name: 'UsersListPage',
        components: {
            userTable : () => import('@/components/userTable.vue')
        },
        data: function() {
            return {
                users: [],
                restUrl: '/users'
            }
        },
        methods: {
            loadData: function() {
                axios.get(this.restUrl).then(({data}) => {
                    this.users = data
                })
            }
        },
        mounted: function(){
            this.loadData()
        }
    }
</script>