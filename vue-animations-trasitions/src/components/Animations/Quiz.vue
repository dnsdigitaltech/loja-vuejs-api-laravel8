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
    export default {
        data() {
            return {
                title: 'Quiz',
                mode: 'app-question'
            }
        },
        methods: {
            changeMode() {
            alert('ujndsgbnsdg')
            }
        },
        components:{
            'app-question': Question
        }
    }
</script>

<style scoped>

</style>