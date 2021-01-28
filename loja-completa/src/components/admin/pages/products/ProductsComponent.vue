<template>
  <div>
    <h1 v-text="title"></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Listagem de Produtos",
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.$store.dispatch("loadProducts");
    },
  },
};
</script>

<style scoped></style>
