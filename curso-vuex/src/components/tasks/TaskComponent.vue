<template>
  <div>
    <h2>{{ title }}</h2>
    <task-add-component></task-add-component>
    <ul>
      <li
        v-for="(task, index) in getTasks"
        :key="index"
        :class="{ 'completed': task.completed }"
      >
        <a href="#" @click.prevent="completedTask(task)">Toogle</a>
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import TaskAddComponent from "./TaskAddComponent";
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
  methods: {
    completedTask(task) {
      this.$store.commit("TOOGLE_TASK", task);
    },
  },
  components: {
    TaskAddComponent,
  },
};
</script>

<style scoped>
.completed {
  background: green;
}
</style>
