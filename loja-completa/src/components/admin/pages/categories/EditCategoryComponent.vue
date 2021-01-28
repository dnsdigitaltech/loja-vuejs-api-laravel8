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
    this.loadCagetory();
  },
  data() {
    return {
      title: "Editar Categoria",
      category: {},
    };
  },
  methods: {
    loadCagetory() {
      this.$store
        .dispatch("loadCategory", this.id)
        .then((response) => (this.category = response))
        .catch((error) => {
          this.$snotify.error("Categoria não encontrada", "404");
          this.$router.push({ name: "admin.categories" });
        });
    },
  },
  components: {
    formCat: FormCategoryComponent,
  },
};
</script>

<style scoped></style>
