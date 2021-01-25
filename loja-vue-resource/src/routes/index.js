import HomeComponent from '../components/home/HomeComponent'
import ProductComponent from '../components/products/ProductComponent'
import ProductCreateComponent from '../components/products/ProductCreateComponent'
import ProductEditComponent from '../components/products/ProductEditComponent'

export default [
    {path: '/', component: HomeComponent},
    {path: '/produtos', component: ProductComponent},
    {path: '/produtos/criar', component: ProductCreateComponent},
    {path: '/produtos/:id/editar', component: ProductEditComponent, name: 'product.edit', props: true}
]