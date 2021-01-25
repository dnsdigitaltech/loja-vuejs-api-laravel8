<template>
  <div>
    <h2>{{ title }}</h2>
    <form @submit.prevent="createProduct">
      <div class="form-group" :class="{ 'has-warning': errorsValidation.name }">
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          v-model="product.name"
          placeholder="nome"
        />
        <div v-if="errorsValidation.name">
          <p
            v-for="(error, index) in errorsValidation.name"
            :key="index"
            v-text="error"
          ></p>
        </div>
      </div>
      <div class="form-group" :class="{ 'has-warning': errorsValidation.description }">
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          v-model="product.description"
          placeholder="Descrição"
        />
        <div v-if="errorsValidation.description">
          <p
            v-for="(error, index) in errorsValidation.description"
            :key="index"
            v-text="error"
          ></p>
        </div>
      </div>
      <div class="form-group" :class="{ 'has-warning': errorsValidation.category_id }">
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          v-model="product.category_id"
          placeholder="Categoria"
        />
        <div v-if="errorsValidation.category_id">
          <p
            v-for="(error, index) in errorsValidation.category_id"
            :key="index"
            v-text="error"
          ></p>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
    </form>
    <preloader-component :preloader="preloader"></preloader-component>
  </div>
</template>

<script>
import PreloaderComponent from "../general/PreloaderComponent";
export default {
  data() {
    return {
      title: "Cadatrar Novo Produto",
      product: {
        name: "",
        description: "",
        category_id: "",
      },
      errorsValidation: "",
      preloader: false,
    };
  },
  methods: {
    createProduct() {
      this.preloader = true;
      this.$http
        .post("http://localhost:8000/api/v1/products", this.product)
        .then(
          (response) => {
            this.$router.push("/produtos");
          },
          (error) => {
            if (error.status === 422) this.errorsValidation = error.body.errors;
          }
        )
        .finally(() => (this.preloader = false));
    },
  },
  components: {
    PreloaderComponent,
  },
};
</script>

<style scoped>
.has-warning {
  color: rgb(153, 55, 10);
}
.has-warning input {
  border: 1px solid rgb(153, 55, 10);
}
</style>
