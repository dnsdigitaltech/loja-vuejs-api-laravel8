import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../vuex/store'
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
import ProductDetail from '../components/frontend/pages/product/ProductDetail'
import CartComponent from '../components/frontend/pages/cart/CartComponent'
import LoginComponent from '../components/frontend/pages/login/LoginComponent'
import RegisterComponent from '../components/frontend/pages/user/RegisterComponent'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: SiteComponent,
        children: [
            {path: '',component: HomeComponent, name: 'home', meta: {auth: false}},
            {path: 'produto/:id', component: ProductDetail, name: 'product.detail', props: true},
            {path: 'contato',component: ContactComponent, name: 'contact'},
            {path: 'carrinho',component: CartComponent, name: 'cart'},
            {path: 'login',component: LoginComponent, name: 'login', meta: {auth: false}},
            {path: 'cadastrar',component: RegisterComponent, name: 'register', meta: {auth: false}},
        ]
    },
    {
        path: '/admin', 
        component: AdminComponent,
        meta: {auth: true},//autenticação em um grupo de rota
        children: [
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categorias', component: CategoriesComponent, name: 'admin.categories'},
            {path: 'categorias/criar', component: AddCategoryComponent, name: 'admin.categories.create'},  
            {path: 'categorias/:id/editar', component: EditCategoryComponent, name: 'admin.categories.edit', props:true},       
            
            {path: 'produtos', component: ProductsComponent, name: 'admin.products', meta: {auth:true}}
        ]
    },
    
]

const router =  new VueRouter({
    routes
})

//Restringir Páginas antes de cada rota
router.beforeEach((to, from, next) => {
    //Verifica de o user está logado e atenticado
    if(to.meta.auth && !store.state.auth.authenticated) {
        //armazenar a url para não voltar pto login
        store.commit('CHANGE_URL_BACK', to.name)
        return router.push({name: 'login'})
    }
    //verificar se a rota pai esta autenticada 
    if(to.matched.some(record => record.meta.auth) && !store.state.auth.authenticated){
        store.commit('CHANGE_URL_BACK', to.name)
        return router.push({name: 'login'})
    }
    //Verifica se está logado e exibe as informações
    if(to.meta.hasOwnProperty('auth') && !to.meta.auth && store.state.auth.authenticated){
        return router.push({name: 'admin.dashboard'})
    }
    next()
})

export default router