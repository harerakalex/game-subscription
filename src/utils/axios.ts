import axios from 'axios';
import { getToken } from './asyncStorage';

const BACKEND_URL = 'http://192.168.1.76:3500/api/v1';
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
