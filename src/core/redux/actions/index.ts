import { store } from 'store';
import { getType } from 'typesafe-actions';

import * as AuthActions from './auth';

const dispatchAction = (type: any, payload?: any) => store.dispatch({ type: getType(type), payload });

export { AuthActions, dispatchAction as default };
