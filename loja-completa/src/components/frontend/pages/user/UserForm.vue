<template>
    <div>
        <div :class="['form-group', {'has-error': errors.name}]">
            <div v-if="errors.name">{{errors.name[0]}}</div>
            <input type="text" class="form-control" placeholder="Nome" v-model="user.name">
        </div>
        <div :class="['form-group', {'has-error': errors.name}]">
            <div v-if="errors.email">{{errors.email[0]}}</div>
            <input type="email" class="form-control" placeholder="E-mail" v-model="user.email">
        </div>
        <div :class="['form-group', {'has-error': errors.password}]">
            <div v-if="errors.password">{{errors.password[0]}}</div>
            <input type="password" class="form-control" placeholder="Senha" v-model="user.password">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-success">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user', 'errors']
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