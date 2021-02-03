<template>
  <div>
    <ul class="nav bg-dark">
      <li class="nav-item">
        <router-link :to="{ name: 'admin.dashboard' }" class="nav-link"
          >Dashboard</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'admin.categories' }" class="nav-link"
          >Categorias ({{ totalCategories }})</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'admin.products' }" class="nav-link"
          >Produtos</router-link
        >
      </li>
      <li class="nav-item" v-if="me.name">
        <router-link :to="{name: 'admin.dashboard'}" class="nav-link">
            Olá {{ me.name }}  (<a @click.prevent="logout" href="">Sair</a>)
        </router-link>
      </li>
      <li class="nav-item" v-else>
        <router-link :to="{name: 'login'}" class="nav-link">LOGIN</router-link>
      </li>
    </ul>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    totalCategories() {
      return this.$store.state.categories.items.data.length;
    },
    me() {
      return this.$store.state.auth.me
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({name: 'login'})
    }
  },
};
</script>

<style></style>
