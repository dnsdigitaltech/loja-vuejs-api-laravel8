<template>
    <div>
        <button class="btn btn-info" @click.prevent="addCart">Adicionar Carrinho</button>
    </div>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        addCart() {
            this.$store.commit('ADD_PRODUCTS_CART', this.product)
        } 
    },
}
</script>

<style scoped>

</style>