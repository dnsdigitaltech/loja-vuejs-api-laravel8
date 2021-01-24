<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/produtos">Produtos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
