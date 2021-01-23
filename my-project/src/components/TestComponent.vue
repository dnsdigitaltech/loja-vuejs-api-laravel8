<template>
    <div class="comp">
        <h2>{{ title }}</h2>
        <p>Teste</p>
        <span>teste 2 {{ msg }}</span>
        <form-component />
    </div>
</template>

<script>
import FormComponent from './FormComponent'
export default {
    data() {
        return {
            msg: 'Curso de Vue JS',
            title: 'Test Component'
        }
    },  
    components: {
        FormComponent
    }  
}
</script>

<style scoped>
    p {
        color: royalblue;
    }
    .comp {
        border: 1px solid green;
        margin: 5px;
        padding: 5px;
    }
</style>