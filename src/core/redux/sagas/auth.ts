import api from 'api';
import idx from 'idx';
import { AuthActions } from 'actions';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import { put, all, delay, call } from 'redux-saga/effects';

const { login } = AuthActions;

export function* authenticate({ payload }: any): Generator {
  const authResponse = yield call(api.login.create, payload);

  !idx(authResponse, _ => _.token)
    ? yield all([
        put(login.failure(authResponse.message)),
        toast(authResponse.message, { type: 'error' }),
      ])
    : yield all([
        put(login.success(authResponse)),
        toast('Logado com sucesso!', { type: 'success' }),
        delay(500),
        put(push('/profile')),
      ]);
}

export function* disconnect(): Generator {
  yield all([
    put(push('/')),
    toast('Sua sessão expirou, por favor logue novamente', { type: 'error' }),
  ]);
}
