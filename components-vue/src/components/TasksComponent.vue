<template>
    <div>
        <h2>{{ title }}</h2>
        <ul>
            <li v-for="{item, index} in items" :key="index"> {{ item }} </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['items', 'title'],
    data() {
        return {
           // title: 'Lista de Tarefas'
        }
    },
}
</script>

<style  scoped>

</style>