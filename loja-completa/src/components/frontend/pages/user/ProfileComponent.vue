<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8 ">
                <div class="card">
                    <div class="card-header">
                        {{ title }}
                    </div>
                    <div class="card-body">
                        <form class="form" @submit.prevent="updateProfile">
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
            title: 'Atualizar Perfil',
           
            errors: {}
        }
    },
    computed: {
        formData() {
            return this.$store.state.auth.me
        }
    },
    methods: {
        updateProfile() {
            this.$store.dispatch('update', this.formData)
                    .then(() => {
                        this.$router.push({name: 'admin.dashboard'})
                        this.$snotify.success('Atualizado com sucesso!')
                    })
                    .catch(response => {
                        this.errors = response.errors
                        this.$snotify.error('Error ao atualizar!')
                    })
        }
    },
    components: {
        UserForm
    }
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