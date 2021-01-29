<template>
    <div>
        <h1>{{title}}</h1>
        <div class="row">
            <div class="col-3" v-for="product in products" :key="product.id">
            <div v-if="product.image">
              <img
                :src="[`${url_img}products/${product.image}`]"
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
                {{ product.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { URL_BASE_IMAGE } from '../../../../config/config'
export default {
    data() {
        return {
            title: 'Produtos',
            url_img: URL_BASE_IMAGE
        }
    },
    created() {
        this.$store.dispatch('loadProducts', {})
        /*if(this.products.data.length == 0){
            this.$store.dispatch('loadProducts', {})
        }*/
    },
    computed:{
        products(){
            return this.$store.state.products.items.data
        }
    }
}
</script>

<style scoped>
.img-list {
  max-width: 100px;
}
</style>