import axios from 'axios';
import { apiUrl } from '../util';

const api = axios.create({
  baseURL: apiUrl
})

export default api;