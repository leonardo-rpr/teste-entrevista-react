import get from './get';

const person = (getResource: Function) => ({
  get: () => get(getResource),
});

export default person;
