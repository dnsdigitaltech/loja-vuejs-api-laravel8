import axios from "axios";
import { URL_AUTH } from '../../../config/config'
const RESOURCE = 'auth'
export default {
    login(context, params) {
        context.commit('PRELOADER', true)
        return axios.post(`${URL_AUTH}${RESOURCE}`, params)
                    .then(response => {
                        //Se der certo pega as informações da mutation
                        context.commit('AUTH_USER_OK', response.data.user)
                    })
                    .catch(error => console.log(error))
                    .finally(() => context.commit('PRELOADER', false))
    }
}