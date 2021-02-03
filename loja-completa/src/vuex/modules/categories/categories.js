import axios from "axios";
import { URL_BASE, axiosInstance } from '../../../config/config'
const RESOURCE = 'categories/'
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
          axios.get(`${URL_BASE}${RESOURCE}`, {params})
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
            axiosInstance.get(`${URL_BASE}${RESOURCE}${id}`)
            .then(response => resolve(response.data))
            .catch(error => reject(error))
            .finally(() => context.commit('PRELOADER', false))
            })
        },
        storeCategory (context, params){
          context.commit('PRELOADER', true)
          return new Promise((resolve, reject) => {
            axiosInstance.post(`${URL_BASE}${RESOURCE}`, params)
            .then(response => resolve())
            .catch(error => reject(error))
            .finally(() => context.commit('PRELOADER', false))
            })
          
        },
        updateCategory (context, params) {
          context.commit('PRELOADER', true)
          return new Promise((resolve, reject) => {
            axiosInstance.put(`${URL_BASE}${RESOURCE}${params.id}`, params)
            .then(response => resolve())
            .catch(error => reject(error))
            .finally(() => context.commit('PRELOADER', false))
            })
        },
        destroyCategory (context, id) {
          context.commit('PRELOADER', true)
          return new Promise((resolve, reject) => {
            axiosInstance.delete(`${URL_BASE}${RESOURCE}${id}`)
            .then(response => resolve())
            .catch(error => reject(error))
            })
        }
    },
    getters: {
        
    }
}