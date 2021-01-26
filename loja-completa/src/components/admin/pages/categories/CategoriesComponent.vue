<template>
  <div>
    <h1 v-text="title"></h1>
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
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "Listagem de Categorias",
      categories: { data: [] },
    };
  },
  created() {
    this.loadCategories();
  },
  methods: {
    loadCategories() {
      axios
        .get("http://127.0.0.1:8000/api/v1/categories")
        .then((response) => {
          console.log(response);
          this.categories = response.data;
        })
        .catch((errors) => {
          console.log(errors);
        })
        .finally();
    },
  },
};
</script>

<style scoped></style>
