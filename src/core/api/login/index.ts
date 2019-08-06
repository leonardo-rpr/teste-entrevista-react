import { Login } from 'apiTypes';
import create from './create';

const login = (getPublicResource: Function) => ({
    create: (credentials: Login) => create(getPublicResource, credentials),
  });

export default login;
