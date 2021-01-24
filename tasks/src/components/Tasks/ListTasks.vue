<template>
    <div>
        <h2>{{ title }}</h2>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Id.</th>
                    <th>Nome</th>
                    <th width="180px">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>
                        <a href="" class="btn btn-info">Editar</a>
                        <a href="" class="btn btn-danger">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Lista de Tarefas',
            tasks: [
                {id: 12, name: 'Teste'},
                {id: 13, name: 'Teste 2'},
                {id: 14, name: 'Teste 3'},
                {id: 15, name: 'Teste 4'},
                {id: 16, name: 'Teste 5'},
            ]
        }
    },
}
</script>

<style scoped>

</style>