<template>
    <select class="form-control" @input="changed($event.target.value)">
        <option value="">Выбрать кол-во пользователей на странице</option>
        <option v-for="item in list" :key="item" :value="item">
            {{ item }}
        </option>
    </select>
</template>

<script>
    import axios from '@/axios.js';

    export default {
        name: 'RowsPerPage',
        props: ['users'],
        data: () => ({
            list: [2, 5, 10, 100],
            restUrl: '/users'
        }),
        methods: {
            changed(value) {
                axios.get(`${this.restUrl}?_limit=${value}`).then(({data}) => {
                    this.$emit('update:users', data)
                });
            }
        }
    }
</script>