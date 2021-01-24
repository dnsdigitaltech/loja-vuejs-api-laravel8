import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'

export default [
    {path: '/', component: HomeComponent},
    {path: '/produtos', component: ProductsComponent},
    {path: '/tarefas', component: TasksComponent},
]