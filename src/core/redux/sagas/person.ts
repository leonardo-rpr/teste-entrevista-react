import api from 'api';
import idx from 'idx';
import { PersonActions } from 'actions';
import { toast } from 'react-toastify';
import { put, all, call } from 'redux-saga/effects';

const { person } = PersonActions;

export function* getUserInfo(): Generator {
  const authResponse = yield call(api.person.get);

  !idx(authResponse, _ => _.data)
    ? yield all([
        put(person.failure(authResponse.message)),
        toast('Houve algum problema em buscar os dados desse usuário', { type: 'error' }),
      ])
    : yield put(person.success(authResponse));
}
