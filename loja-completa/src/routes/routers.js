import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminComponent from '../components/admin/AdminComponent'
//categories
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'
import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'
//products
import ProductsComponent from '../components/admin/pages/products/ProductsComponent'
//frontEnd
import SiteComponent from '../components/frontend/SiteComponent'
import HomeComponent from '../components/frontend/pages/home/HomeComponent'
import ContactComponent from '../components/frontend/pages/contact/ContactComponent'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: SiteComponent,
        children: [
            {path: '',component: HomeComponent, name: 'home'},
            {path: 'contato',component: ContactComponent, name: 'contact'},
        ]
    },
    {
        path: '/admin', 
        component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categorias', component: CategoriesComponent, name: 'admin.categories'},
            {path: 'categorias/criar', component: AddCategoryComponent, name: 'admin.categories.create'},  
            {path: 'categorias/:id/editar', component: EditCategoryComponent, name: 'admin.categories.edit', props:true},       
            
            {path: 'produtos', component: ProductsComponent, name: 'admin.products'}
        ]
    },
    
]

const router =  new VueRouter({
    routes
})

export default router