<template>
  <div id="app" class="comp">
    <h2>{{ title }}</h2>
    Teste {{ msg }}
    <test-component />
    <form-component />
    <tasks-component />
  </div>
</template>

<script>

import TestComponent from './components/TestComponent'
import FormComponent from './components/FormComponent'
import TasksComponent from './components/TasksComponent'

export default {
  data() {
    return {
      msg: 'Alguma coisa',
      title: 'App Component'
    }
  },
  components: {
    TestComponent,
    FormComponent,
    TasksComponent
  },
}
</script>

<style>
.comp {
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
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
