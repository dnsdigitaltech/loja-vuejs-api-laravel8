<template>
    <div class="col-3">
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
        {{ item.name }}
    </div>
</template>

<script>
import { URL_BASE_IMAGE } from '../../config/config'
export default {
    props: ['item', 'path'],
    data() {
        return {            
            url_img: URL_BASE_IMAGE,
        }
    },
}
</script>

<style scoped>
.img-list {
  max-width: 100px;
}
</style>