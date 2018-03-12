<template>
    <div>
        <h3>{{pages}}</h3>

        <div>
            <span v-for="n in pages">{{ n }} </span>
        </div>
    </div>
</template>

<script>
//import axios from 'axios';

export default {
    name: 'pagination',

    model: {
        prop: 'pages'
    },

    props: {
        pages: {
            type: Number,
            required: true
        }
    },

    methods: {

    },
}
</script>