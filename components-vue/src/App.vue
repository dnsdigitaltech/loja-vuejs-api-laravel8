<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <tasks-component :items="['Lavar', 'Passar', 'Cozinhar']" :title="'Esse é o titulo de lista'"></tasks-component>
    <list-item-componet :title="'Listagem de algo'" :items="['Valor 1', 'Valor 2', 'Valor 3']"></list-item-componet>
  </div>
</template>

<script>

import TasksComponent from './components/TasksComponent'
import ListItemComponet from './components/ListItemComponet'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    TasksComponent,
    ListItemComponet
  },
}
</script>

<style>
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
