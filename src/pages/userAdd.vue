<template>
    <div>
        <user-form :user="user"></user-form>
        <button type="button" @click="save">Сохранить</button>
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
            user: {},
            restUrl: '/users',
            loading: true
        }),

        mounted() {

        },

        methods: {
            redirectToList(id) {
                this.$router.push(`edit/${id}`)
            },

            save() {
                axios.post(this.restUrl, this.user)
                    .then((response) => this.redirectToList(response.data.id))
            }
        }
    }
</script>