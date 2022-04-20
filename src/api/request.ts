import axios from 'axios';
import { api } from '../common/constants';

const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'origin',
    Authorization: '123', // к этому мы ещё вернёмся как-нибудь потом
  },
});

instance.interceptors.response.use((res) => res.data);

export default instance;
