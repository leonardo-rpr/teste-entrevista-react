import { Login } from 'apiTypes';

export default interface CreateInterface {
  (getPublicResource: Function, credentials: Login): Promise<any>;
};
