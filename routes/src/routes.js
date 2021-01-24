import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'

export default [
    {path: '/', component: HomeComponent},
    {path: '/produtossdfgsdf ', component: ProductsComponent, name: 'products'},
    {path: '/tarefas', component: TasksComponent},
]