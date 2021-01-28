<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div :class="['form-group', { 'has-error': errors.name }]">
        <div v-if="errors.name">{{ errors.name[0] }}</div>
        <input
          type="text"
          name=""
          v-model="category.name"
          class="form-control"
          placeholder="Nome da Categoria"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      require: false,
      type: Object | Array,
      default: () => {
        return {
          id: "",
          name: "",
        };
      },
    },
    updating: {
      require: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      errors: {},
    };
  },
  methods: {
    onSubmit() {
      const action = this.updating ? "updateCategory" : "storeCategory";
      this.$store
        .dispatch(action, this.category)
        .then(() => this.$router.push({ name: "admin.categories" }))
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style scoped>
.has-error {
  color: rgb(221, 54, 3);
}
.has-error input {
  border: 1px solid rgb(221, 54, 3);
}
</style>
