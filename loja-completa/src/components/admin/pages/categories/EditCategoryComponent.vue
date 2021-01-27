<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <input
          type="text"
          name=""
          v-model="category.name"
          class="form-control"
          placeholder="Nome da Categoria"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
    },
  },
  created() {
    this.$store
      .dispatch("loadCategory", this.id)
      .then((response) => (this.category = response))
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      title: "Editar Categoria",
      category: { name: "" },
    };
  },
};
</script>

<style scoped></style>
