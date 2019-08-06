import axios from 'axios';
import { GetPublicResourceInterface } from './Interfaces';
import throwError from './throwError';

const getPublicResource = async (props: GetPublicResourceInterface) => {
  const { endpoint, method, data, params, headers } = props;

  const API_URL = 'https://dev.api.prodigioeducacao.com/v1';
  const url = `${API_URL}${endpoint}`;

  try {
    return axios.request({ url, method, data, params, headers }).catch(error => throwError(error));
  } catch (error) {
    return console.error(`Application error: ${error}`);
  }
};

export default getPublicResource;
