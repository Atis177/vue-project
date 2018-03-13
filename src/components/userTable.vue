<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" v-bind:key="item.id">
        <td>
         <router-link :to="'/user/edit/' + item.id">#{{ item.id }}</router-link>
        </td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.isActive }}</td>
        <td>{{ item.balance }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.registered }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="8">
          Пользователей на странице: {{ total }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'UsersTable',
  props: {
    // Список пользователей
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    // Общее количество пользователей
    total: function() {
      return this.users.length;
    }
  }
}
</script>