<template>
  <div>
    <h1 v-text="title"></h1>
    <router-link :to="{ name: 'admin.categories.create' }" class="btn btn-success"
      >Cadastrar</router-link
    >

    <table class="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th width="100">AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="index">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>
            <router-link
              :to="{ name: 'admin.categories.edit', params: { id: category.id } }"
              class="btn btn-info"
              >Editar</router-link
            >
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
      title: "Listagem de Categorias",
    };
  },
  created() {
    this.$store.dispatch("loadCategories");
  },
  computed: {
    categories() {
      return this.$store.state.categories.items.data;
    },
  },
  methods: {},
};
</script>

<style scoped></style>
