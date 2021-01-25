<template>
    <div>
        <h2>{{ title }}</h2>
        <form @submit.prevent="createProduct">
            <div class="form-group">
                <input type="text" name="" id="" class="form-control" v-model="product.name" placeholder="nome">
            </div>
            <div class="form-group">
                <input type="text" name="" id="" class="form-control" v-model="product.description" placeholder="Descrição">
            </div>
            <div class="form-group">
                <input type="text" name="" id="" class="form-control" v-model="product.category_id" placeholder="Categoria">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Cadatrar Novo Produto',
            product:{
                name: '',
                description: '',
                category_id: ''
            }
        }
    },
    methods: {
        createProduct() {
            this.$http.post('http://localhost:8000/api/v1/products', this.product)
                        .then(response => {
                            this.$router.push('/produtos')
                        }, error => {

                        })
                        .finally(() => console.log('Finalizou!'))
        }
    },
}
</script>

<style scoped>

</style>