<template>
    <div>
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
            msg: 'Curso de Vue JS'
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
</style>