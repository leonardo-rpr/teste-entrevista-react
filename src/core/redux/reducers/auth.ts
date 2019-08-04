import { AuthActions } from 'actions';
import { createReducer } from 'typesafe-actions';
import { AuthState } from 'AuthTypes';

const { login, logout } = AuthActions;

const initialState = {
  user: null,
  error: '',
  loading: false,
  headers: {},
};

const reducer = createReducer(initialState as AuthState)
  .handleAction(login.request, state => ({ ...state, loading: true, error: '' }))
  .handleAction(login.success, (state, { payload }) => {
    const { user, headers } = payload;
    return { ...state, ...initialState, user, headers };
  })
  .handleAction(login.failure, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }))
  .handleAction(logout, state => ({ ...state, ...initialState }));

export default reducer;
