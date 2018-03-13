<template>
    <div>
        <button v-on:click="changePage">1</button>
        <button v-on:click="changePage">2</button>
        <button v-on:click="changePage">3</button>
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

            currentPage: {
                type: String
            },

            selectedPerPage:{
                type: String
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