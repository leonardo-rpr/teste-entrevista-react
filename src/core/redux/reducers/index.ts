import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import person from './person';

export default (history: any) => combineReducers({
    router: connectRouter(history),
    auth,
    person,
  });
