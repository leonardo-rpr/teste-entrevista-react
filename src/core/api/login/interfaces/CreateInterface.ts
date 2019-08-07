import { Login } from '../../types';

export default interface CreateInterface {
  (getPublicResource: Function, credentials: Login): Promise<any>;
};
