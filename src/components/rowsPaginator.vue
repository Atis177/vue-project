<template>
    <div>
        <button v-for="number in pagesCount" v-bind:key="number" v-on:click="changePage">{{number}}</button>
    </div>
</template>

<script>
    import axios from '@/axios.js';

    export default {
        name: 'RowsPerPage',

        props: {
            users: {
                type: Array,
                required: true
            },

            selectedPerPage:{
                type: String
            },

            usersCount:{
                type: Number
            },

            pagesCount: {
                type: Number
            }
        },
        data: () => ({
            list: [2, 5, 10, 100],
            restUrl: '/users'
        }),
        methods: {
            changePage(event) {
                axios.get(`${this.restUrl}?_limit=${this.selectedPerPage}&_page=${event.target.textContent}`).then(({data}) => {
                    this.$emit('update:users', data);
                    this.$emit('update:currentPage', event.target.textContent)
                });
            }
        }
    }
</script>