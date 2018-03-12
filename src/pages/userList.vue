<template>
    <div>
        <h3>Список пользователей</h3>

        <div v-if="!users.length" class="alert alert-warning">
            Загрузка...
        </div>
        <user-table v-else v-bind:users="users"></user-table>

        <div>Показывать
            <select v-model="selected" @change="">
                <option disabled value="">Выберите один из вариантов</option>
                <option v-for="n in users.length">{{ n }} </option>
            </select>
            <pagination v-bind:pages="pages"></pagination>
        </div>
    </div>
</template>

<script>
    import axios from '@/axios.js'

    export default {
        name: 'UsersListPage',
        components: {
            userTable : () => import('@/components/userTable.vue'),
            pagination : () => import('@/components/pagination.vue')
        },
        data: function() {
            return {
                users: [],
                pages: null,
                restUrl: '/users',
                selected: ''
            }
        },
        methods: {
            loadData: function() {
                axios.get(this.restUrl).then(({data}) => {
                    this.users = data
                    this.pages = data.length / this.selected.number
                })
            }
        },
        mounted: function(){
            this.loadData()
        }
    }
</script>