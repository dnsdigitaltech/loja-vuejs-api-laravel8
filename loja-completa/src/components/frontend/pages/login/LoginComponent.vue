<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8 ">
                <div class="card">
                    <div class="card-header">
                        {{ title }}
                    </div>
                    <div class="card-body">
                        <form class="form" @submit.prevent="login">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="E-mail" v-model="formData.email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Senha" v-model="formData.password">
                            </div>
                            <div class="form-group">
                                <button type="submit"  class="btn btn-success">Acessar</button>
                                <router-link :to="{name:'register'}">Não tem cadastro? Registre-se!</router-link>
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
            title: 'Login',
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', this.formData)
                    //se autenticação der certo direciona para alguma pagina restrita
                    .then(() => this.$router.push({name: 'admin.dashboard'}))
                    .catch(() => {
                        this.$snotify.error('Dados inválidos',  'Falha ao acessar')
                    })
        }
    },
}
</script>