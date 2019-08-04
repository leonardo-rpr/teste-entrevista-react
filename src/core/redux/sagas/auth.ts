import api from 'api';
import idx from 'idx';
import { AuthActions } from 'actions';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import { put, all, delay } from 'redux-saga/effects';

const { login } = AuthActions;

export function* authenticate({ payload }: any): Generator {
  const authResponse = yield api.login.create(payload);

  !idx(authResponse, _ => _.user.id)
    ? yield all([
        put(login.failure(authResponse.message)),
        toast(authResponse.message, { type: 'error' }),
      ])
    : yield all([put(login.success(authResponse)), delay(500), put(push('/profile'))]);
}

export function* disconnect(): Generator {
  yield put(push('/'));
}
