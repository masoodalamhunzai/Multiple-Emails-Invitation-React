import axios from 'axios';

export const serverUrl = 'http://localhost:5000/v1';
const api = axios.create({
  baseURL: serverUrl,
  timeout: 60000,
});

api.interceptors.request.use(req => req);
api.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response && error.response.status === 403) {
      console.log(error);
    }
    throw error;
  },
);

export default api;
