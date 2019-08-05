import idx from 'idx';
import CreateInterface from './interfaces/CreateInterface';

const create: CreateInterface = async (getPublicResource, register) => {
  const method = 'POST';
  const endpoint = '/token';

  const data = register;

  const response = await getPublicResource({ method, endpoint, data });

  return idx(response, _ => _.data.token) ? { token: response.data.token } : response;
};

export default create;
