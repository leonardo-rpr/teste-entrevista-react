import idx from 'idx';
import GetInterface from './interfaces/get.interfaces';

const formatData = (data: Record<string, any>) => ({
  name: data.name,
  email: data.email,
  avatar: data.imageProfileThumb,
  courses: data.courses,
});

const get: GetInterface = async (getResource) => {
  const method = 'GET';
  const endpoint = '/person/me';

  const response = await getResource({ method, endpoint });

  return idx(response, _ => _.data.name) ? formatData(response.data) : {};
};

export default get;
