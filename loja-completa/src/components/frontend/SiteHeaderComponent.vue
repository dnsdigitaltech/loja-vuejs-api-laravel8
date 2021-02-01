<template>
    <div>
        <ul class="nav">
           <li class="nav-item">
               <router-link :to="{name: 'home'}" class="nav-link">HOME</router-link>
           </li>
           <li class="nav-item">
               <router-link :to="{name: 'contact'}" class="nav-link">CONTATO</router-link>
           </li>
           <li class="nav-item">
               <router-link :to="{name: 'cart'}" class="nav-link">CARRINHO ({{ cart }})</router-link>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    computed: {
        cart () {
            this.$store.state.cart.products
        }
    }
}
</script>

<style scoped>

</style>