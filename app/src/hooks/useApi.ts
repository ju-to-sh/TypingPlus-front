import axios from "axios";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const useApi = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

useApi.interceptors.request.use(
  (config) => {
    const token = cookies.get('accesstoken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  }
)
