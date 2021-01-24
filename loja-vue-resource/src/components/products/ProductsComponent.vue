<template>
    <div>
        <h2>{{ title }}</h2>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Lista de Produtos',
            products: {}
        }
    },
    created() {
        this.getProducts()
    },
    methods: {
        getProducts(){
            this.$http.get('http://localhost:8000/api/v1/products/')
            .then(response => {
                this.products = response.body
            },error => {
                console.log(error)
            })
        }
    },
}
</script>

<style scoped>

</style>