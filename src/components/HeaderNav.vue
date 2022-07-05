<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-button v-b-toggle.sidebar-1>b-c</b-button>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-2 py-2">
          <router-link to="/diary">오늘 나의 하루 </router-link>
        </div>
        <div class="px-2 py-2">
          <router-link to="/mypage">My Page </router-link>
        </div>
      </b-sidebar>
      <b-navbar-brand><router-link to="/">IUSYOU</router-link></b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!--Right-->
        <b-navbar-nav class="ml-auto">
          <b-nav-item><router-link to="/user">LogIn</router-link></b-nav-item>
          <b-nav-item>LogOut</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
