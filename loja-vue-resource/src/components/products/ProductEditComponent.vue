<template>
  <div>
    <h2>{{ title }}</h2>
    <form @submit.prevent="updateProduct">
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
        <button type="submit" class="btn btn-primary">Editar</button>
      </div>
    </form>
    <preloader-component :preloader="preloader"></preloader-component>
  </div>
</template>

<script>
import PreloaderComponent from "../general/PreloaderComponent";
export default {
  props: {
    id: {
      required: true,
      default: "",
    },
  },
  data() {
    return {
      title: "Editar Produto",
      product: {
        name: "",
        description: "",
        category_id: "",
      },
      errorsValidation: "",
      preloader: false,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.preloader = true;
      this.$http
        .get(`http://localhost:8000/api/v1/products/${this.id}`)
        .then(
          (response) => {
            console.log(response.body);
            this.product = response.body;
          },
          (error) => {
            console.log(error);
            if (error.status === 404) {
              alert("Produto não encontrado");
              this.$router.push("/produtos");
            }
          }
        )
        .finally(() => (this.preloader = false));
    },
    updateProduct() {
      this.preloader = true;
      this.$http
        .put(`http://localhost:8000/api/v1/products/${this.id}`, this.product)
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
