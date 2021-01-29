<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Home page',
        }
    },
    created() {
        if(this.products.data.length == 0){
            this.$store.dispatch('loadProducts', {})
        }
    },
    computed:{
        products(){
            return this.$store.state,products.items
        }
    }
}
</script>

<style scoped>

</style>