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
                            <user-form :user="formData" :errors="errors"></user-form>
                        </form>   
                    </div>
                </div><!--card-->
            </div><!--col-8-->
        </div><!--row-->
    </div><!--container-->
</template>

<script>
import UserForm from './UserForm'
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
    components: {
        UserForm
    }
}
</script>
