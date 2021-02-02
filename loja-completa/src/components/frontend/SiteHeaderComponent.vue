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
               <router-link :to="{name: 'cart'}" class="nav-link">CARRINHO ({{ cart.length }})</router-link>
           </li>
           <li class="nav-item" v-if="me.name">
               <router-link :to="{name: 'admin.dasboard'}" class="nav-link">
                   Olá {{ me.name }}
               </router-link>
           </li>
           <li class="nav-item" v-else>
               <router-link :to="{name: 'login'}" class="nav-link">LOGIN</router-link>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart.products
        },
        me() {
            return this.$store.state.auth.me
        }
    }
}
</script>

<style scoped>

</style>