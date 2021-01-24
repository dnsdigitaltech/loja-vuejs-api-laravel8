<template>
    <div>
        <h2>{{ title }}</h2>
        <p>Parametro: {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Tasks Component'
        }
    },
}
</script>

<style scoped>

</style>