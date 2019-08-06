import { store } from 'store';
import { getType } from 'typesafe-actions';

import * as AuthActions from './auth';
import * as PersonActions from './person';

const dispatchAction = (type: any, payload?: any) => store.dispatch({ type: getType(type), payload });

export { AuthActions, PersonActions, dispatchAction as default };
