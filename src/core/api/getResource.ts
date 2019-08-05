import axios from 'axios';
import dispatchAction, { AuthActions } from 'actions';
import { GetResourceInterface } from './Interfaces';

const getResource = async (props: GetResourceInterface) => {
  const { endpoint, method, data, params } = props;

  const API_URL = 'https://dev.api.prodigioeducacao.com/v1';
  const url = `${API_URL}${endpoint}`;

  try {
    return axios.request({ url, method, data, params }).catch((error) => {
      console.error(error);

      error.status === 401 && dispatchAction(AuthActions.logout);
    });
  } catch (error) {
    return console.error(`Application error: ${error}`);
  }
};

export default getResource;
