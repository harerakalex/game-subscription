import axios from 'axios';

import { BACKEND_URL } from '../constants/environment';
import { getToken } from './asyncStorage';

const http = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Authorization: 'JWT ',
    'access-control-allow-origin': '*',
    'content-Type': 'application/json'
  }
});

http.interceptors.request.use(async (request: any) => {
  const token = await getToken();
  if (token) {
    request.headers['Authorization'] = `${token}`;
  }
  return request;
});

export default http;
