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
          <th width="200">AÇÕES</th>
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
            <a href="#" class="btn btn-danger" @click.prevent="confirmDestroy(category)"
              >Remover</a
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
    this.loadCategories();
  },
  computed: {
    categories() {
      return this.$store.state.categories.items.data;
    },
  },
  methods: {
    loadCategories() {
      this.$store.dispatch("loadCategories");
    },
    confirmDestroy(category) {
      this.$snotify.error(
        `Deseja realmente deletar a categoria: ${category.name}?`,
        "Deletar?",
        {
          timout: 10000,
          showProgressBar: true,
          closeOnClick: true,
          buttons: [
            { text: "Não", action: () => console.log("Não deletou...") },
            { text: "Sim", action: () => this.destroy(category) },
          ],
        }
      );
    },
    destroy(category) {
      this.$store
        .dispatch("destroyCategory", category.id)
        .then(() => {
          this.$snotify.success(`Sucesso ao deletar a categoria: ${category.name}!`);
          this.loadCategories();
        })
        .catch((error) => {
          this.$snotify.error("Erro ao deletar a categoria!", "Falha");
        });
    },
  },
};
</script>

<style scoped></style>
