<template>
  <div>
    <h2>{{ title }}</h2>
    <form @submit.prevent="onSubmit">
      <div :class="{ 'has-error': error }">
        <input type="text" placeholder="CEP:" v-model="cep" />
        <button type="submit">Buscar</button>
        <div v-if="error" v-text="error"></div>
      </div>
    </form>
    <div v-if="preloader">
      <img src="../assets/preloader.gif" class="preloader" alt="" />
    </div>
    <div v-if="address.cep">
      <p>Cep: {{ address.cep }}</p>
      <p>Logradouro: {{ address.logradouro }}</p>
      <p>Complemento: {{ address.complemento }}</p>
      <p>Bairro: {{ address.bairro }}</p>
      <p>Localidade: {{ address.localidade }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "Buscar CEP",
      cep: "",
      address: {},
      preloader: false,
      error: "",
    };
  },
  methods: {
    onSubmit() {
      this.preloader = true;
      let x = axios
        .get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then((response) => {
          console.log(response.data);
          if (response.data.erro) {
            this.error = "Cep Inválido";
          } else {
            this.address = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = "404";
        })
        .finally(() => (this.preloader = false));
    },
  },
};
</script>

<style scoped>
.preloader {
  max-width: 60px;
}
.has-error {
  color: rgb(182, 53, 2);
}
.has-error input {
  border: 1px solid rgb(182, 53, 2);
}
</style>
