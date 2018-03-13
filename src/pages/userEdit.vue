<template>
     <div>
        <h3>Страница редактирования</h3>

         <div v-if="loading" class="alert alert-warning">
             Загрузка...
         </div>

         <template v-else>
             <user-form v-model="user"></user-form>
             <button type="button" @click="save">Сохранить</button>
             <button type="button" @click="remove">Удалить</button>
         </template>
     </div>
</template>

<script>
    import axios from '@/axios.js';

    export default {
        name: 'EditUserPage',

        components: {
            UserForm: () => import('@/components/userForm.vue')
        },

        data: () => ({
            user: null,
            restUrl: '/users',
            loading: true
        }),

        computed: {
            id() {
                return this.$route.params.id
            },

            url() {
                return `${this.restUrl}/${this.id}`
            }
        },

        mounted() {
            this.loadData();
        },

        methods: {
            loadData() {
                this.loading = true;

                axios.get(this.url)
                    .then(response => response.data)
                    .then(response => (this.user = response))
                    .then(() => (this.loading = false))
            },

            redirectToList() {
                this.$router.push('/users')
            },

            save() {
                axios.patch(this.url, this.user)
                    .then(() => this.redirectToList())
            },

            remove(){
                axios.delete(this.url)
                    .then(() => this.redirectToList())
            }
        }
    }
</script>