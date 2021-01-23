<template>
    <div class="comp">
        <h2>{{ title }}</h2>
        #FormComponent
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Form component'
        }
    },
}
</script>

<style scoped>
    .comp {
        border: 1px solid rgb(8, 20, 36);
    }
</style>