import axios from "axios";
import { URL_AUTH, NAME_TOKEN, axiosInstance} from '../../../config/config'
export default {
    actions: {
        register (context, params) {
            context.commit('PRELOADER', true)
            return new Promise((resolve, reject) => {
                axiosInstance.post(`${URL_AUTH}register`, params)
                        .then(response => {
                            context.commit('AUTH_USER_OK', response.data.user)
                            localStorage.setItem('NAME_TOKEN', response.data.token)
                            resolve()
                        })
                        .catch(error => console.log(error.response))
                        .finally(context.commit('PRELOADER', false))
            })
        }
     }
}