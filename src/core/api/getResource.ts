import axios from 'axios';
import dispatchAction, { AuthActions } from '../redux/actions';
import { store } from '../redux/store';
import { GetResourceInterface } from './Interfaces';
import throwError from './throwError';

const getResource = async (props: GetResourceInterface) => {
  const { endpoint, method, data, params } = props;

  const API_URL = 'https://dev.api.prodigioeducacao.com/v1';
  const url = `${API_URL}${endpoint}`;

  const headers = {
    Authorization: `Bearer ${store.getState().auth.token}`,
    'X-Brand': 'proenem',
  };

  try {
    return axios.request({ url, method, data, params, headers }).catch((error) => {
      error.response.status === 401 && dispatchAction(AuthActions.logout);
      return throwError(error);
    });
  } catch (error) {
    return console.error(`Application error: ${error}`);
  }
};

export default getResource;
