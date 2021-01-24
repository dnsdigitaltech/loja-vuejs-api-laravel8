<template>
    <div class="alert alert-success text-center">
        <h1>{{ title }}</h1>
        <p>Sucesso na resposta!</p>
        <button @click="nextQuestion" class="btn btn-success">Próxima Pergunta</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Sucesso!'
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
    .success {
        border: solid 1px green;
        padding: 10px;
    }
</style>