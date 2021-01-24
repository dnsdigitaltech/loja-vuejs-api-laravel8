<template>
    <div>
        <h2>{{ title }}</h2>

        <div class="row">
            <div class="col-6">
                <form class="form form-inline">
                    <input type="text" name="" placeholder="Encontrar?" class="form-control" v-model="filter">
                </form>
            </div>
            <div class="col-6">
                <form class="form form-inline" @submit.prevent="onSubmit">
                    <input type="text" name="" placeholder="Nova Tarefa" class="form-control" v-model="task.name">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Id.</th>
                    <th>Nome</th>
                    <th width="180px">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in filteredItems" :key="index">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>
                        <a href="#" @click.prevent="edit(index)" class="btn btn-info">Editar</a>
                        <a href="#" @click.prevent="deleteTask(index)" class="btn btn-danger">Deletar</a>
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
            tasks: [],
            task: {
                id: '',
                name: ''
            },
            updating: false,
            updatedIndex: '',
            filter: ''
        }
    },
    methods: {
        onSubmit() {
            if(this.updating){
                return this.update()
            }
            return this.save()
        },
        save() {
            this.task.id = this.tasks.length + 1
            this.tasks.push(this.task),
            this.clearForm()
        },
        edit(index) {
            this.task = this.tasks[index]
            this.updatedIndex = index
            this.updating = true
        },
        update(){
            this.tasks[this.updatedIndex] = this.task
            this.updating = false
            this.clearForm()
        },
        clearForm() {
            this.task = {
                id: '',
                name: ''
            }
        },
        deleteTask(index) {
            this.tasks.splice(index,1)
        }
    },
    computed: {
        filteredItems() {
            if(this.filter === ''){
                return this.tasks
            }
            /*let vm = this
            return this.tasks.filter( task => {
                return task.name.indexOf(vm.filter) > -1
            })*/
            /*let vm = this
            return this.tasks.filter( task => {
                return task.name.toLowerCase().indexOf(vm.filter.toLowerCase()) > -1
            })*/
            let vm = this
            return this.tasks.filter( task => {
                return task['name'].includes(vm.filter)
            })
        }
    }
}
</script>

<style scoped>
    form {
        margin: 20px 0;
    }
</style>