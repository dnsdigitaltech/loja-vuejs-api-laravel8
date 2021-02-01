<template>
    <div>
        <h1>{{title}}</h1>
        <div class="row">
            <item 
            v-for="product in products.data" 
            :key="product.id"
            :item="product"
            :path="'products'"
            ></item>           
        </div>
        <paginate :pagination="products" :offset="6" @paginate="loadProducts"> </paginate>
    </div>
</template>

<script>
import PaginationComponent from '../../../layouts/PaginationComponent'
import Item from '../../../layouts/Item'
export default {
    data() {
        return {
            title: 'Produtos',
        }
    },
    created() {
        if(this.products.data.length == 0){
            this.$store.dispatch('loadProducts', {})
        }
    },
    computed: {
        products() {
            return this.$store.state.products.items;
        },
        params() {
        return {
            page: this.products.current_page,
            filter: this.search,
        };
        },
    },
    methods: {
        loadProducts(page) {
        this.$store.dispatch("loadProducts", { ...this.params, page });
        },
    },
    components: {
        paginate: PaginationComponent,
        Item
    }
}
</script>

<style scoped>

</style>