import axios from 'axios';

const BACKEND_URL = 'http://830e-2c0f-eb68-22d-4d00-c1ca-8ffc-a73c-5cee.ngrok.io/api/v1';
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
