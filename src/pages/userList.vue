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
    import axios from 'axios'
    import userTable from '@/components/userTable.vue'

    export default {
        name: 'UsersListPage',
        components: {
            userTable
        },
        data: function() {
            return {
                users: []
            }
        },
        methods: {
            loadData: function() {
                axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
                    this.users = data
                })
            }
        },
        mounted: function(){
            this.loadData()
        }
    }
</script>