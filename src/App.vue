<template>
  <div id="app">
    <div class="center w85">
      <app-header></app-header>
      <div class='background-gray'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="sass">
  .center
    margin-right: auto
    margin-left: auto

  .top-margins
    margin-top: 15px

  .background-gray
    background-color: rgb(246,246,239)

  .w85
    width: 85%

</style>
