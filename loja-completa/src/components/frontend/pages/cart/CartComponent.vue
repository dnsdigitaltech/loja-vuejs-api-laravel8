<template>
    <div>
        <h1>{{title}}</h1>
        <div class="row">
            <div class="col" v-for="product in cart.products" :key="product.id">
                <div v-if="product.image">
                    <img
                        :src="[`${url_img}${path}/${product.image}`]"
                        :alt="product.name"
                        class="img-list"
                    />
                </div>
                <div v-else>
                    <img 
                    :src="[`${url_img}img/noimage.jpg`]" 
                    :alt="product.name"
                    class="img-list">
                </div>
                <p>{{ product.name }}</p>
                <button class="btn btn-danger" @click.prevent="removeCart(product)">
                    Remover Carrinho
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { URL_BASE_IMAGE } from '../../../../config/config'
export default {
    data() {
        return {
            title: 'Carrinho de Compras',
            path: 'products',
            url_img: URL_BASE_IMAGE,
        }
    },
    computed: {
        cart () {
            return this.$store.state.cart
        }
    },
    methods: {
        removeCart(product) {
            this.$store.commit('REMOVE_PRODUCT_CART', product)
        } 
    },
}
</script>
<style scoped>
    .img-list {
        max-width: 100px;
    }
</style>