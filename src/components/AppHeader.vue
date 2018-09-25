<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>
    <b-navbar-brand tag="h1" class="mb-0"> TO DO </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="/">
          List todos
        </b-nav-item>
        <b-nav-item href="/create">
          Create todo
        </b-nav-item>
        <b-nav-item href="/login">
          Login
        </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
