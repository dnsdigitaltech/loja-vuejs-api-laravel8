<template>
    <div class="col-3">
        <router-link :to="{name: 'product.detail', params: {id: item.id}}">
            <div v-if="item.image">
            <img
                :src="[`${url_img}${path}/${item.image}`]"
                :alt="item.name"
                class="img-list"
            />
            </div>
            <div v-else>
                <img 
                :src="[`${url_img}img/noimage.jpg`]" 
                :alt="item.name"
                class="img-list">
            </div>
            <p>{{ item.name }}</p>
        </router-link>
        <button-cart :product="item"></button-cart>
    </div>
</template>

<script>
import { URL_BASE_IMAGE } from '../../config/config'
import ButtonCart from './ButtonCart'
export default {
    props: ['item', 'path'],
    data() {
        return {            
            url_img: URL_BASE_IMAGE,
        }
    },
    components: {
        ButtonCart
    }
}
</script>

<style scoped>
.img-list {
  max-width: 100px;
}
</style>