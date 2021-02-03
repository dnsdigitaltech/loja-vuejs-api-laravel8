<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8 ">
                <div class="card">
                    <div class="card-header">
                        {{ title }}
                    </div>
                    <div class="card-body">
                        <form class="form" @submit.prevent="register">
                            <div :class="['form-group', {'has-error': errors.name}]">
                                <div v-if="errors.name">{{errors.name[0]}}</div>
                                <input type="text" class="form-control" placeholder="Nome" v-model="formData.name">
                            </div>
                            <div :class="['form-group', {'has-error': errors.name}]">
                                <div v-if="errors.email">{{errors.email[0]}}</div>
                                <input type="email" class="form-control" placeholder="E-mail" v-model="formData.email">
                            </div>
                            <div :class="['form-group', {'has-error': errors.password}]">
                                <div v-if="errors.password">{{errors.password[0]}}</div>
                                <input type="password" class="form-control" placeholder="Senha" v-model="formData.password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-success">Cadatrar-ser</button>
                                <router-link :to="{name:'login'}">Ja sou cadastrado? Login!</router-link>
                            </div>
                        </form>   
                    </div>
                </div><!--card-->
            </div><!--col-8-->
        </div><!--row-->
    </div><!--container-->
</template>

<script>
export default {
    data() {
        return {
            title: 'Registrar',
            formData: {
                name: '',
                email: '',
                password: ''
            },
            errors: {}
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', this.formData)
                    .then(() => {
                        this.$router.push({name: 'admin.dashboard'})
                        this.$snotify.success('Sucesso ao Cadastrar!')
                    })
                    .catch(response => {
                        this.errors = response.errors
                        this.$snotify.error('Error ao Cadastrar!')
                    })
        }
    },
}
</script>

<style scoped>
    .has-error {
        color: rgb(221, 54, 3);
    }
    .has-error input {
        border: 1px solid rgb(221, 54, 3);
    }
</style>