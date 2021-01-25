<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(task, index) in getTasks" :key="index">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lista de Tarefas",
    };
  },
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style scoped></style>
