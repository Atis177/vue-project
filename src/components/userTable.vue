<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Имя пользователя</th>
        <th>Адрес</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Сайт</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" v-bind:key="item.id">
        <td># {{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.address.street }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.website }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="8">
          Всего пользователей: {{ total }}
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