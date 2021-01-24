<template>
    <div>
        <h2 v-text="title"></h2>
        <form @submit.prevent="onSubmit">
            <input type="text" name="" placeholder="Informe o CEP" v-model="cep">
            <button type="submit">Buscar CEP</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Busca CEP com Vue JS',
            cep: ''
        }
    },
    methods: {
        onSubmit(){
            this.$http.get('https://viacep.com.br/ws/'+ this.cep +'/json/')
                        .then(response => {
                            console.log(response.body)
                        }, error => console.log(error))
        }
    },
}
</script>

<style scoped>

</style>