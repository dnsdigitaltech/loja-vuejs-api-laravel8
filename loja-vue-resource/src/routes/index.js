import HomeComponent from '../components/home/HomeComponent'
import ProductComponent from '../components/products/ProductComponent'
import ProductCreateComponent from '../components/products/ProductCreateComponent'

export default [
    {path: '/', component: HomeComponent},
    {path: '/produtos', component: ProductComponent},
    {path: '/produtos/criar', component: ProductCreateComponent}
]