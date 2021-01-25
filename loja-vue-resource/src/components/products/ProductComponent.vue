<template>
    <div>
        <h2>{{ title }}</h2>
        <router-link to="/produtos/criar" class="btn btn-info btn-create">Cadatrar Produto</router-link>
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
                        <a href="#" class="btn btn-info">Editar</a>
                        <a href="#" class="btn btn-danger">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination-component
            :pagination="products"
            :offset="offset"
            @paginate="getProducts">
            </pagination-component>
        <!--
        <ul class="pagination">
            <li v-if="products.current_page - 1 >= 1" class="page-item">
                <a href="" class="page-link" @click.prevent="pagination(products.current_page - 1)"> Voltar </a>
            </li>
            <li v-if="products.current_page + 1 <= products.last_page" class="page-item">
                <a href="" class="page-link" @click.prevent="pagination(products.current_page + 1)">Próxima Página</a>
            </li>
        </ul>
        -->
        <div v-if="preloader">
            <img src="../../assets/preloader.gif" alt="" class="preloader">
        </div>
    </div>
</template>

<script>
import PaginationComponent from '../general/PaginationComponent'
export default {
    data() {
        return {
            title: 'Lista de Produtos',
            products: {
                current_page: 1,
                last_page: 1,
                total: 0,
                per_page: 10,
                from: 0,
                to: 0
            },
            offset:4,
            preloader: false
        }
    },
    created() {
        this.getProducts()
    },
    methods: {
        getProducts(){
            this.preloader = true
            this.$http.get(`http://localhost:8000/api/v1/products?page=${this.products.current_page}`)
            .then(response => {
                console.log(response.body)
                this.products = response.body
            },error => {
                console.log(error)
            })
            .finally(() => this.preloader = false)
        },
        pagination(pageNumber){
            this.products.current_page = pageNumber
            this.getProducts()
        }
    },
    components: {
        PaginationComponent
    }
}
</script>

<style>
    .preloader{
        max-width: 60px;
    }
    .btn-create {
        margin: 10px 0;
    }
</style>