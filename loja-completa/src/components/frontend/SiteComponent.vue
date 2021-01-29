<template>
    <div>
        <site-header-component></site-header-component>
       <router-view></router-view>
       <site-footer-component></site-footer-component>
    </div>
</template>

<script>
import SiteFooterComponent from './SiteFooterComponent'
import SiteHeaderComponent from './SiteHeaderComponent'
export default {
    components:{
        SiteFooterComponent,
        SiteHeaderComponent
    }
}
</script>

<style scoped>

</style>