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

            <li class="nav-item dropdown show" v-if="me.name">
                <a class="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Olá {{ me.name }}!
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                        <router-link class="dropdown-item" :to="{name:'profile'}">Meu Perfil</router-link>
                    </li>
                    <li>
                        <a class="dropdown-item" @click.prevent="logout">Sair</a>
                    </li>
                </ul>
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
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    },
}
</script>

<style scoped>

</style>