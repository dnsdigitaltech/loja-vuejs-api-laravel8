import axios from "axios";
import { URL_AUTH } from '../../../config/config'
const RESOURCE = 'auth'
export default {
    login(context, params) {
        axios.post(`${URL_AUTH}${RESOURCE}`, params)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
}