<template>
    <div class="alert alert-danger text-center">
        <h1>{{ title }}</h1>
        <hr>
        <p>Erro na resposta!</p>

        <button @click="nextQuestion" class="btn btn-danger">Próxima Pergunta</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Error!'
        }
    },
    methods: {
        nextQuestion() {
            this.$emit('changeMode')
        }
    },
}
</script>

<style scoped>
    .error {
        border: solid 1px red;
        padding: 10px;
    }
</style>