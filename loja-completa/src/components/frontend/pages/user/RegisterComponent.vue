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
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Nome" v-model="formData.name">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="E-mail" v-model="formData.email">
                            </div>
                            <div class="form-group">
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
            }
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', this.formData)
                    .then(() => this.$router.push({name: 'admin.dashboard'}))
        }
    },
}
</script>

<style scoped>

</style>