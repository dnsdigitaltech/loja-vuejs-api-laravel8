<template>
  <div>
    <h1 v-text="title"></h1>
    <form-cat></form-cat>
  </div>
</template>

<script>
import FormCategoryComponent from "./partials/FormCategoryComponent";
export default {
  data() {
    return {
      title: "Cadastrar categoria",
    };
  },
  components: {
    formCat: FormCategoryComponent,
  },
};
</script>

<style scoped></style>
