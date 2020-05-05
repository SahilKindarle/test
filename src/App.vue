<template>
  <div id="app">
    <navbar v-if="!$route.meta.hideNavigation"></navbar>
    <router-view />
  </div>
</template>

<script>
import M from 'materialize-css'
import navbar from './views/Nav.vue'
export default {
  components: {
    navbar
  },
  mounted() {
    M.AutoInit(),
      function toast() {
        M.toast('I am a toast')
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  /* background-color: #E9E9F0; */
  background-color: #f0f0f7;
}
</style>