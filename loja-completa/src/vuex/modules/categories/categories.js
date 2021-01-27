import axios from "axios";
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
        loadCategories (context) {
          context.commit('PRELOADER', true)
          axios.get("http://127.0.0.1:8000/api/v1/categories")
          .then((response) => {
            console.log(response);
            context.commit('LOAD_CATEGORIES', response)
          })
          .catch((errors) => {
            console.log(errors);
          })
          .finally(() => context.commit('PRELOADER', false));
        },
        storeCategory (context, params){
          context.commit('PRELOADER', true)
          return new Promise((resolve, reject) => {
            axios.post("http://127.0.0.1:8000/api/v1/categories", params)
            .then(response => resolve())
            .catch(error => reject(error))
            .finally(() => context.commit('PRELOADER', false))
            })
          
        }
    },
    getters: {
        
    }
}