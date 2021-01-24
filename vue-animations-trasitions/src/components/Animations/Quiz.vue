<template>
    <div>
        <h2 v-text="title"></h2>
        <!--<app-question @changeMode="changeMode"></app-question>-->
        <component 
        :is="mode" 
        @changeMode="changeMode">
        </component>
    </div>
</template>

<script>
    import Question from './Question'
    import AnswerSuccess from './AnswerSuccess'
    import AnswerError from './AnswerError'
    export default {
        data() {
            return {
                title: 'Quiz',
                mode: 'app-question'
            }
        },

        methods: {
            changeMode(mode) {
                if(mode == undefined)
                    this.mode = 'app-question'
                else
                    this.mode = mode
            }
        },
        components:{
            'app-question': Question,
            AnswerSuccess,
            AnswerError
        }
    }
</script>

<style scoped>
    
</style>