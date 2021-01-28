<template>
  <div>
    <h1 v-text="title"></h1>
    <table class="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>IMAGEM</th>
          <th width="200">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.image }}</td>
          <td>
            <a href="" class="btn btn-info">Editar</a>
            <a href="" class="btn btn-danger">Deletar</a>
          </td>
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
    products() {
      return this.$store.state.products.items.data;
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
