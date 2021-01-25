<template>
  <div>
    <h2>{{ title }}</h2>
    <router-link to="/produtos/criar" class="btn btn-info btn-create"
      >Cadatrar Produto</router-link
    >
    <div class="alert alert-danger" v-if="confirmDelete">
      <h2>Deseja Realmente deletar?</h2>
      <hr />
      <button class="btn btn-danger" @click.prevent="deleteProduct">Deletar Agora</button>
    </div>
    <p>
      Total: <span>{{ products.total }}</span>
    </p>
    <table class="table table-dark">
      <thead>
        <tr>
          <th>#id</th>
          <th>Nome</th>
          <th>Decrição</th>
          <th width="200">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products.data" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>
            <router-link
              class="btn btn-info"
              :to="{ name: 'product.edit', params: { id: product.id } }"
              >Editar</router-link
            >
            <a
              href="#"
              @click.prevent="comfirmDeleteProduct(product.id)"
              class="btn btn-danger"
              >Deletar</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <preloader-component :preloader="preloader"></preloader-component>
    <pagination-component :pagination="products" :offset="offset" @paginate="getProducts">
    </pagination-component>
  </div>
</template>

<script>
import PaginationComponent from "../general/PaginationComponent";
import PreloaderComponent from "../general/PreloaderComponent";
export default {
  data() {
    return {
      title: "Lista de Produtos",
      products: {
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 10,
        from: 0,
        to: 0,
      },
      offset: 4,
      preloader: false,
      confirmDelete: false,
      idProductDelete: 0,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.preloader = true;
      this.$http
        .get(`http://localhost:8000/api/v1/products?page=${this.products.current_page}`)
        .then(
          (response) => {
            console.log(response.body);
            this.products = response.body;
          },
          (error) => {
            console.log(error);
          }
        )
        .finally(() => (this.preloader = false));
    },
    comfirmDeleteProduct(id) {
      this.confirmDelete = true;
      this.idProductDelete = id;
    },
    deleteProduct() {
      this.preloader = true;
      this.$http
        .delete(`http://localhost:8000/api/v1/products/${this.idProductDelete}`)
        .then(
          (response) => {
            this.confirmDelete = false;
            this.getProducts();
          },
          (error) => {
            console.log(error);
          }
        )
        .finally(() => (this.preloader = false));
    },
  },
  components: {
    PaginationComponent,
    PreloaderComponent,
  },
};
</script>

<style>
.btn-create {
  margin: 10px 0;
}
</style>
