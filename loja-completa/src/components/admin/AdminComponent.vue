<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ name: 'admin.dashboard' }">Dashboard</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'admin.categories' }">categorias</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style></style>
