import axios from "axios";
export const URL_BASE = 'http://127.0.0.1:8000/api/v1/'
export const URL_AUTH = 'http://127.0.0.1:8000/api/'
export const URL_BASE_IMAGE = 'http://127.0.0.1:8000/storage/'
export const URL_BASE2 = 'http://192.168.0.124/api/'
export const NAME_TOKEN = 'TOKEN_AUTH'
export const CSRF_TOKEN = localStorage.getItem('NAME_TOKEN')

export const axiosInstance = axios.create({
    baseURL: URL_AUTH,
    headers: {
      'Authorization': `Bearer ${CSRF_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
