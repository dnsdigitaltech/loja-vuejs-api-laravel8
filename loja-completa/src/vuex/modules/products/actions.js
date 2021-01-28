import axios from "axios";
import { URL_BASE } from '../../../config/config'
const RESOURCE = 'products/'
export default {
    loadProducts (context) {
        context.commit('PRELOADER', true)
        axios.get(`${URL_BASE}${RESOURCE}`)
        .then(response => context.commit('LOAD_PRODUCTS', response.data))
        .catch(error => console.log(error))
        .finally(() => context.commit('PRELOADER', false))
    }    
}