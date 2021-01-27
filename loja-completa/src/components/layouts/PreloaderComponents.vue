<template>
  <div v-show="preloader" class="preloader">
    <img src="../../assets/preloader.gif" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    preloader() {
      return this.$store.state.preloader.loading;
    },
  },
};
</script>

<style scoped>
.preloader {
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  padding: 5% 0;
}
.preloader img {
  max-width: 60px;
}
</style>
