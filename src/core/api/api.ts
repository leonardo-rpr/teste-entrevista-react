import getResource from './getResource';
import getPublicResource from './getPublicResource';
import login from './login';

const api = (() => ({
  login: login(getPublicResource),
}))();

export default api;
