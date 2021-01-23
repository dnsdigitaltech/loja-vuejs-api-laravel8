<template>
    <div>
        
        <form action="">
            <input type="text" name="" placeholder="Nome" v-model="userData.name">
            {{ userData.name }}
            <hr>
            <input type="email" name="" placeholder="E-mail" v-model="userData.email">
            {{ userData.email }}
            <hr>
            <input type="number" name="" placeholder="Idade" v-model="userData.age">
            {{ userData.age }}
            <hr>
            <input type="radio" name="sex"  value="M" v-model="userData.sex"> Masculino
            <input type="radio" name="sex"  value="F" v-model="userData.sex"> Feminino
            <p v-if="userData.sex"> O sexo selecionado é: {{ userData.sex }}</p>
            <hr>
            <select name="" id="" v-model="userData.state">
                <option value="">Selecione o Estado</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
            </select>
            <p v-if="userData.state">O estado Selecionado é: {{ userData.state }}</p>
            <hr>
            <label for="agree">Concordo com os termos de uso</label>
            <input type="checkbox" name="" id="agree" v-model="terms">
            <hr>
            <textarea name="" id="" cols="30" rows="10" v-model="description"></textarea>
            {{ description }}
            <hr>
            <button type="submit">Enviar agora</button>
        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                name: '',
                email: '',
                age: '',
                sex: '',
                state: ''
            },
            terms: true,
            description: ''
        }
    },
}
</script>

<style scoped>

</style>