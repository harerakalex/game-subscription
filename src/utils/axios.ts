import axios from 'axios';

const BACKEND_URL = 'http://192.168.1.75:3500/api/v1';
const http = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Authorization: 'JWT ',
    'access-control-allow-origin': '*',
    'content-Type': 'application/json'
  }
});

http.interceptors.request.use(async (request: any) => {
  request.headers['Authorization'] = 'JWT';
  return request;
});

export default http;
