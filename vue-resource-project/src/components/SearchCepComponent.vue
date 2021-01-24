<template>
    <div>
        <h2 v-text="title"></h2>
        <form @submit.prevent="onSubmit">
            <input type="text" name="" placeholder="Informe o CEP" v-model="cep">
            <button type="submit">Buscar CEP</button>
        </form>
        <div v-if="error != ''">
            {{ error }}
        </div>
        <div v-if="preloader">
            <img src="../assets/preloader.gif" alt="carregando..." width="50">
        </div>
        <div v-show="address.bairro">
            <p><b>Bairro: </b>{{ address.bairro }}</p>
            <p><b>Cidade: </b>{{ address.localidade }}</p>
            <p><b>Logradouro: </b>{{ address.logradouro }}</p>
            <p><b>Cep: </b>{{ address.cep }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Busca CEP com Vue JS',
            cep: '',
            address: {},
            preloader: false,
            error: ''
        }
    },
    methods: {
        onSubmit(){     
            this.reset();       
            this.preloader = true
            this.$http.get('https://viacep.com.br/ws/'+ this.cep +'/json/')
                        .then(response => {
                            this.address = response.body
                        }, error => {
                            console.log(error)
                            this.error = 'Cep errado!'
                        })
                        .finally(() => {
                            this.preloader = false
                        })
        },
        reset() {
            this.error = ''
            this.address = {}
        }
    },
}
</script>

<style scoped>

</style>