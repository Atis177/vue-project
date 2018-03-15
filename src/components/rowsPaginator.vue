<template>
    <div>
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage == 1}">
                <a class="page-link" @click.prevent="prevPage" href="#">Назад </a>
            </li>
            <li v-for="number in pagesCount" :class="{ active: currentPage == number}" :key="number" class="page-item">
                <a class="page-link" @click.prevent="changePage(number)" href="#">{{number}}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage == pagesCount}">
                <a class="page-link" @click.prevent="nextPage" href="#"> Вперед </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'RowsPerPage',

        model: {
            prop: 'currentPage'
        },

        props: {
            currentPage: {
                type: Number,
                required: true
            },

            selectedPerPage: {
                type: Number,
                required: true
            },

            usersCount: {
                type: Number,
                required: true
            }
        },

        computed: {
            pagesCount() {
                return Math.ceil(this.usersCount / this.selectedPerPage);
            }
        },

        methods: {
            changePage(value) {
                this.$emit('changeNumberPage', value);
            },

            prevPage() {
                this.$emit('changeNumberPage', this.currentPage - 1);
            },

            nextPage() {
                this.$emit('changeNumberPage', this.currentPage + 1);
            }
        }
    }
</script>