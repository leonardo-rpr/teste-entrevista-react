import { createReducer } from 'typesafe-actions';
import { AuthState } from 'AuthTypes';
import { AuthActions } from '../actions';

const { login, logout } = AuthActions;

const initialState = {
  token: '',
  error: '',
  loading: false,
};

const reducer = createReducer(initialState as AuthState)
  .handleAction(login.request, state => ({ ...state, loading: true, error: '' }))
  .handleAction(login.success, (state, { payload }) => {
    const { token } = payload;
    return { ...state, ...initialState, token };
  })
  .handleAction(login.failure, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }))
  .handleAction(logout, state => ({ ...state, ...initialState }));

export default reducer;
