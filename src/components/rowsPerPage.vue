<template>
    <div class="col-sm-2">
        <select v-model="selectedPerPage" class="form-control" @input="changed($event.target.value)">
            <option v-for="item in list" :key="item" :value="item">
                {{ item }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'RowsPerPage',

        props: {
            selectedPerPage: {
                type: Number,
                required: true
            }
        },

        data: () => ({
            list: [2, 5, 10, 100]
        }),

        methods: {
            changed(value) {
                this.$emit('changePerPage', value);
            }
        }
    }
</script>

<style scoped>
    .form-control {
        margin-bottom: 2rem;
    }
</style>