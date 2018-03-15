<template>
  <div ref="form">

    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Имя</label>
          <input type="text"
                 name="firstName"
                 v-validate="'required|alpha'"
                 data-vv-delay="500"
                 :class="{'input': true, 'is-invalid': errors.has('firstName') }"
                 class="form-control"
                 v-model="user.firstName" />
          <div v-show="errors.has('firstName')" class="invalid-feedback">
            {{ errors.first('firstName') }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label>Фамилия</label>
          <input type="text"
                 name="lastName"
                 v-validate="'required|alpha'"
                 data-vv-delay="500"
                 :class="{'input': true, 'is-invalid': errors.has('lastName') }"
                 class="form-control"
                 v-model="user.lastName" />
          <div v-show="errors.has('lastName')" class="invalid-feedback">
            {{ errors.first('lastName') }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Баланс</label>
          <input type="text" class="form-control" v-model="user.balance" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label>Телефон</label>
          <input type="text"
                 name="phone"
                 v-validate="'required|numeric'"
                 data-vv-delay="500"
                 :class="{'input': true, 'is-invalid': errors.has('phone') }"
                 class="form-control"
                 v-model="user.phone" />
          <div v-show="errors.has('phone')" class="invalid-feedback">
            {{ errors.first('phone') }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Адрес</label>
          <input type="text" class="form-control" v-model="user.address" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label>Компания</label>
          <input type="text" class="form-control" v-model="user.company" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Email</label>
          <input name="email"
                 type="text"
                 v-validate="'required|email'"
                 data-vv-delay="1000"
                 class="form-control"
                 :class="{'input': true, 'is-invalid': errors.has('email') }"
                 v-model="user.email">
          <div v-show="errors.has('email')" class="invalid-feedback">
            {{ errors.first('email') }}
          </div>
        </div>
      </div>
      <div class="col">
        <upload-photo :user="user"></upload-photo>
      </div>
    </div>
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