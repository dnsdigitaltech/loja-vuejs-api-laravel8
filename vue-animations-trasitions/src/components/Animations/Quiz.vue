<template>
    <div class="container">
        <h2 v-text="title"></h2>
        <!--<app-question @changeMode="changeMode"></app-question>-->
        <div class="row">
            <div class="custon-width">
                <transition name="effect" mode="out-in">
                    <component 
                    :is="mode" 
                    @changeMode="changeMode">
                    </component>
                </transition>
            </div>
        </div>
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
    .effect-leave-active {
        animation: effect-out 2.5s;
    }
    .effect-enter-active {
        animation: effect-in 2.5s;
    }
    @keyframes effect-out {
        from {
            transform:rotateY(0deg);
        } 
        to {
            transform:rotateY(90deg);
        }
    }
    @keyframes effect-in {
        from {
            transform:rotateY(90deg);
        } 
        to {
            transform:rotateY(0deg);
        }
    }
    .custon-width {
        margin: 0 auto;
    }
</style>