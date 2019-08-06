import { getType } from 'typesafe-actions';
import { all, takeLatest } from 'redux-saga/effects';
import { AuthActions, PersonActions } from 'actions';

import { authenticate, disconnect } from './auth';
import { getUserInfo } from './person';

export default function* root() {
  yield all([
    takeLatest(getType(AuthActions.login.request), authenticate),
    takeLatest(getType(AuthActions.logout), disconnect),
    takeLatest(getType(PersonActions.person.request), getUserInfo),
  ]);
}
