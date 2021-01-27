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
          axios.get("http://127.0.0.1:8000/api/v1/categories")
          .then((response) => {
            console.log(response);
            context.commit('LOAD_CATEGORIES', response)
          })
          .catch((errors) => {
            console.log(errors);
          })
          .finally();
        }
    },
    getters: {
        
    }
}