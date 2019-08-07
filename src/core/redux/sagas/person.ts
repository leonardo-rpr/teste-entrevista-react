import api from 'api';
import idx from 'idx';
import { PersonActions } from 'actions';
import { toast } from 'react-toastify';
import { put, all, call } from 'redux-saga/effects';

const { person } = PersonActions;

export function* getUserInfo(): Generator {
  const userResponse = yield call(api.person.get);

  !idx(userResponse, _ => _.name)
    ? yield all([
        put(person.failure(userResponse)),
        toast('Houve algum problema ao buscar os dados desse usuário, tente novamente', {
          type: 'error',
        }),
      ])
    : yield put(person.success(userResponse));
}
