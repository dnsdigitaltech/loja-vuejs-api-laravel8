<template>
  <div id="app">
    Teste {{ msg }}
    <test-component />
    <form-component />
  </div>
</template>

<script>

import TestComponent from './components/TestComponent'
import FormComponent from './components/FormComponent'

export default {
  data() {
    return {
      msg: 'Alguma coisa'
    }
  },
  components: {
    TestComponent,
    FormComponent
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
