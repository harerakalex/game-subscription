import axios from 'axios';

const BACKEND_URL = 'http://930a-2c0f-eb68-22d-4d00-3b5f-7276-2296-943d.ngrok.io/api/v1';
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
