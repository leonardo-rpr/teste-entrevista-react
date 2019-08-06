import getResource from './getResource';
import getPublicResource from './getPublicResource';

import login from './login';
import person from './person';

const api = (() => ({
  login: login(getPublicResource),
  person: person(getResource),
}))();

export default api;
