import axios from "axios";
import { URL_BASE,  URL_BASE2} from '../../../config/config'
const RESOURCE = 'category/'
export default {
    state:{
      items: {
            data: []
        },
    },
    mutations:{
      LOAD_CATEGORIES (state, categories){
        state.items = categories
      }
    },
    actions:{
        loadCategories (context, params) {
          context.commit('PRELOADER', true)
          axios.get(`${URL_BASE2}${RESOURCE}find-all/`, {params})
          .then((response) => {
            console.log(response);
            context.commit('LOAD_CATEGORIES', response)
          })
          .catch((errors) => {
            console.log(errors);
          })
          .finally(() => context.commit('PRELOADER', false));
        },
        loadCategory (context, id) {
          context.commit('PRELOADER', true)
          return new Promise((resolve, reject) => {
            axios.get(`${URL_BASE2}${RESOURCE}find/${id}`)
            .then(response => {resolve(response.data.itens), console.log(response.data.itens)})
            .catch(error => reject(error))
            .finally(() => context.commit('PRELOADER', false))
            })
        },
        storeCategory (context, params){
          context.commit('PRELOADER', true)
          return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE2}${RESOURCE}create`, params)
            .then(response => resolve())
            .catch(error => reject(error))
            .finally(() => context.commit('PRELOADER', false))
            })
          
        },
        updateCategory (context, params) {
          context.commit('PRELOADER', true)
          return new Promise((resolve, reject) => {
            axios.put(`${URL_BASE2}${RESOURCE}update`, params)
            .then(response => resolve())
            .catch(error => reject(error))
            .finally(() => context.commit('PRELOADER', false))
            })
        },
        destroyCategory (context, id) {
          context.commit('PRELOADER', true)
          return new Promise((resolve, reject) => {
            axios.delete(`${URL_BASE2}${RESOURCE}delete/${id}`)
            .then(response => resolve())
            .catch(error => reject(error))
            })
        }
    },
    getters: {
        
    }
}