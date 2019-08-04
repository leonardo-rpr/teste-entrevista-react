import { getType } from 'typesafe-actions';
import { all, takeLatest } from 'redux-saga/effects';
import { AuthActions } from 'actions';

import { authenticate, disconnect } from './auth';

export default function* root() {
  yield all([
    takeLatest(getType(AuthActions.login.request), authenticate),
    takeLatest(getType(AuthActions.logout), disconnect),
  ]);
}
