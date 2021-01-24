<template>
    <div>
        
        <form @submit.prevent="saveData">
            <div :class="errors.has('name') ? 'is-danger' : 'is-success'">
                <input type="text" name="name" v-validate="'required|min:3|max:100'" placeholder="Nome" v-model="userData.name">
                <p v-if="errors.has('name')">
                    {{ errors.first('name') }}
                </p>
            </div>
            
            <div :class="errors.has('email') ? 'is-danger' : 'is-success'">
                <input type="email" v-validate="'required|email'" name="email" placeholder="E-mail" v-model="userData.email">
                <p v-if="errors.has('email')">
                    {{ errors.first('email') }}
                </p>
            </div>
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
            <div>
                <pre v-html="description"></pre>
            </div>
            <hr>
            <button type="submit">Enviar agora</button>
        </form>
        <div v-show="isSubmited">
            {{ userData }}
        </div>
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
            description: '',
            isSubmited: false
        }
    },
    methods: {
        saveData() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.isSubmited = 'true'
                    alert('Formulário enviado')
                    return
                }
            })
        }
    },
}
</script>

<style scoped>
    .is-danger {
        border: 1px solid rgb(179,11,11);
    }
    .is-danger p {
        color: rgb(179,11,11);;
    }
    .is-success {
        border: 1px solid green;
    }
</style>