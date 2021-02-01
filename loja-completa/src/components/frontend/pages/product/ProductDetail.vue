<template>
    <div>
        <h1>{{title}}: {{product.name}}</h1>
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
            <div>
                {{ product.description }}
            </div>
    </div>
</template>

<script>
import { URL_BASE_IMAGE } from '../../../../config/config'
export default {
    props: ['id'],
    created() {
        this.loadProduct()
    },
    data() {
        return {
            title: 'Detalhe do Produto',
            product: {},
            url_img: URL_BASE_IMAGE,
            path: 'products'
        }
    },
    methods: {
        loadProduct() {
            this.$store.dispatch('loadProduct', this.id)
            .then(response => this.product = response)
           //catch()
            //finally()
        }
    },
}
</script>

<style scoped>

</style>