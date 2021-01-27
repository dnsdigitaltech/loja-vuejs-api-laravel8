<template>
  <div id="app">
    <vue-snotify></vue-snotify>
    <preloader-component></preloader-component>
    <router-view></router-view>
  </div>
</template>

<script>
import PreloaderComponent from "./components/layouts/PreloaderComponents";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    PreloaderComponent,
  },
};
</script>

<style></style>
