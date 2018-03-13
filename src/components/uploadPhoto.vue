<template>
    <div class="form-group">
        <label>Аватарка</label>
        <div><img class="img-thumbnail" :src="user.picture"></div>
        <button class="btn btn-info" type="button" @click="selectNewImage">Выбрать новую</button>
        <input type="file" class="hidden" ref="imageUpload" @change="upload">
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'uploadPhoto',

        props: {
            user: {
                type: Object,
                required: true
            }
        },

        methods: {
            selectNewImage() {
                this.$refs.imageUpload.click();
            },

            upload() {
                const url = 'https://api.imgur.com/3/image';
                const data = new FormData();

                data.append('image', this.$refs.imageUpload.files[0]);

                const config = {
                    headers: {
                        'Authorization': 'Client-ID 3bef0b8892d4b04'
                    }
                };

                axios.post(url, data, config)
                    .then(response => response.data)
                    .then(response => {
                        this.user.picture = response.data.link;
                        this.$refs.imageUpload.value = '';
                    })
            }
        }
    }
</script>

<style>
    .btn {
        margin: 1rem;
    }

    .hidden {
        display: none;
    }

    .img-thumbnail {
        max-width: 300px;
    }
</style>