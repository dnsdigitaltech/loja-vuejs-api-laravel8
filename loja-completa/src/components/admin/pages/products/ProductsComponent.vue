<template>
  <div>
    <h1 v-text="title"></h1>
    <table class="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>IMAGEM</th>
          <th>NOME</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.id }}</td>
        </tr>
      </tbody>
    </table>
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
  computed: {
    loadProducts() {
      return this.state.products.items.data.items;
    },
  },
  methods: {
    loadProducts() {
      this.$store.dispatch("loadProducts");
    },
  },
};
</script>

<style scoped></style>
