<template>
    <div class="card">
        <div class="card-header">
            <h2 v-text="question"></h2>
        </div>
        <div class="card-body">
            <form @submit.prevent="checkResult" class="form form-inline">
                <input type="text" name="" class="form-control" placeholder="Resposta" v-model="reply">
                <button class="btn btn-primary" type="submit">Responder</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                question: 'Gerando pergunta...',
                result: 0,
                reply: ''
            }
        },
        created() {
            this.generateQuestion()
        },
        methods: {
            generateQuestion(){
                let numberOne = this.generateRandomNumber(1, 100)
                let numberTwo = this.generateRandomNumber(1, 100)

                this.result = numberOne + numberTwo

                this.question = `Qual é o resultado da soma entre ${numberOne} e ${numberTwo}?`
            },
            generateRandomNumber(min, max){
                return Math.round(Math.random() *  (max - min)) + min
            },
            checkResult() {
                let mode = 'answer-error'
                if (this.reply == this.result)
                    mode = 'answer-success'

                this.$emit('changeMode', mode)
            }
        },
    }
</script>

<style scoped>
    .default {
        border: solid 1px blue;
        padding: 10px;
    }
</style>