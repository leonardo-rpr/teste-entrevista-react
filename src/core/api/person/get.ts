import idx from 'idx';
import GetInterface from './interfaces/get.interfaces';

const get: GetInterface = async (getResource) => {
  const method = 'GET';
  const endpoint = '/person/me';

  const response = await getResource({ method, endpoint });

  return idx(response, _ => _.data.user) ? response.data.user : {};
};

export default get;
