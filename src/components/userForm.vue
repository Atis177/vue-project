<template>
  <div>

    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="user.firstName" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="user.lastName" />
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="user.balance" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="user.phone" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input type="text" class="form-control" v-model="user.address" />
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="user.company" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="user.email" />
    </div>

    <upload-photo :user="user"></upload-photo>

  </div>
</template>

<script>

export default {
    name: 'UserForm',

    components: {
        uploadPhoto : () => import('@/components/uploadPhoto.vue')
    },

    model: {
        prop: 'user'
    },

    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    .hidden {
        display: none;
    }

    .img-thumbnail {
        max-width: 300px;
    }
</style>