<template>
  <div>
    <h2>{{ title }}</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="CEP:" v-model="cep" />
      <button type="submit">Buscar</button>
    </form>
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
    };
  },
  methods: {
    onSubmit() {
      let x = axios
        .get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then((response) => {
          console.log(response.data);
          this.address = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => console.log("Finaly"));
    },
  },
};
</script>

<style scoped></style>
