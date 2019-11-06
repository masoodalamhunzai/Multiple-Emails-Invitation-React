import axios from 'axios';

export const serverUrl = 'http://localhost:5000/v1';
const api = axios.create({
  baseURL: serverUrl,
  timeout: 60000,
});

// export const setToken = accessToken => {
//   api.defaults.headers.common.Authorization = accessToken;
// };
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

// on refresh or browser load.
// if (token !== null) {
//   api.defaults.headers.common.Authorization = token;
// }

export default api;
