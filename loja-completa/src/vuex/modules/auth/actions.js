import axios from "axios";
import { URL_AUTH, NAME_TOKEN, axiosInstance } from '../../../config/config'

export default {
    login(context, params) {
        context.commit('PRELOADER', true)
        return axios.post(`${URL_AUTH}auth`, params)
                    .then(response => {
                        //Se der certo pega as informações da mutation
                        context.commit('AUTH_USER_OK', response.data.user)
                        //armazenar o token para persistir na aplicação
                        localStorage.setItem('NAME_TOKEN', response.data.token)
                    })
                    .finally(() => context.commit('PRELOADER', false))
    },

    checkLogin(context) {
        context.commit('PRELOADER', true)
        //iniciada assim que a app é startada
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem('NAME_TOKEN')
            
            if(!token){
                return reject()
            }
            //se existir token faz requisição para retorno os dados do user
            axiosInstance.get(`me`)
                    .then(response => {
                        context.commit('AUTH_USER_OK', response.data.user)
                        localStorage.setItem('NAME_TOKEN', response.data.token)
                        resolve()
                    })
                    .catch(() => reject(error))
                    .finally(() => context.commit('PRELOADER', false))
        })

    },
    logout(context) {
        localStorage.removeItem('NAME_TOKEN')

        context.commit('AUTH_USER_LOGOUT')
    }
}