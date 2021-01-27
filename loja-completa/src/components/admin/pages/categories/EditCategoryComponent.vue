<template>
  <div>
    <h1>{{ title }}</h1>
    <form-cat :category="category" :updating="true"></form-cat>
  </div>
</template>

<script>
import FormCategoryComponent from "./partials/FormCategoryComponent";
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
      category: {},
    };
  },
  components: {
    formCat: FormCategoryComponent,
  },
};
</script>

<style scoped></style>
