<template>
    <div>
        <user-form :user="user"></user-form>
        <button class="btn btn-success" type="button" @click="save">Сохранить</button>
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
            user: {
                isActive: false,
                picture: 'http://placehold.it/128x128',
            },
            restUrl: '/users'
        }),

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