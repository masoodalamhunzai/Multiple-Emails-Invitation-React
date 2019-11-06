import axios from 'axios';
import { clearState, authToken } from './persistState';
import history from './history';
const token = authToken();

export const vpmServerUrl =
  ' http://lc-api-proxy.us-east-1.elasticbeanstalk.com/';
const api = axios.create({
  baseURL: vpmServerUrl,
  timeout: 60000,
});

export const setToken = accessToken => {
  api.defaults.headers.common.Authorization = accessToken;
};
api.interceptors.request.use(req => req);
api.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response && error.response.status === 403) {
      clearState();
      history.push('/login');
    }
    throw error;
  },
);

// on refresh or browser load.
if (token !== null) {
  api.defaults.headers.common.Authorization = token;
}

export default api;
