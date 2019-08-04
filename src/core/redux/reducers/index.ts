import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';

export default (history: any) => combineReducers({
    router: connectRouter(history),
    auth,
  });
