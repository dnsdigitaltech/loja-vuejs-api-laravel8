<template>
  <div>
    <h1 v-text="title"></h1>
    <form>
      <div class="form-group">
        <input type="text" name="" class="form-control" placeholder="Nome da Categoria" />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Cadastrar categoria",
    };
  },
};
</script>

<style scoped></style>
