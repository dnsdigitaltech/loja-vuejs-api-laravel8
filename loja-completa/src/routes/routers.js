import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminComponent from '../components/admin/AdminComponent'
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'
import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'

Vue.use(VueRouter)
const routes = [
    {
        path: '/admin', 
        component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categorias', component: CategoriesComponent, name: 'admin.categories'},
            {path: 'categorias/criar', component: AddCategoryComponent, name: 'admin.categories.create'},  
            {path: 'categorias/:id/editar', component: EditCategoryComponent, name: 'admin.categories.edit', props:true}           
        ]
    },
    
]

const router =  new VueRouter({
    routes
})

export default router