<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <router-link tag="li" class="nav-item" active-class="active" exact to="/">
                  <a class="nav-link">Главная</a>
              </router-link>
              <router-link tag="li" class="nav-item" active-class="active" to="/users">
                  <a class="nav-link">Список пользователей</a>
              </router-link>
            </ul>
        </div>
    </nav>

    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <router-view />
    </div>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'app'
}
</script>

<style>
#app {

}
</style>
