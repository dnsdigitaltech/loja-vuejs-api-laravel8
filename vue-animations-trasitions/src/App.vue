<template>
  <div id="app">
    <app-quiz></app-quiz>
    <hr>
    <button @click.prevent="show = !show">Mostrar</button>
    <transition name="teste">
      <div v-if="show"> Mostrando... </div>
    </transition>
  </div>
</template>

<script>
import Quiz from './components/Animations/Quiz'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:false
    }
  },
  components: {
    'app-quiz': Quiz,
  },
}
</script>

<style>
.teste-enter-active, .teste-leave-active {
  transition: opacity 1.5s;
}
.teste-enter, .teste-leave-to {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
