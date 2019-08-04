import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AuthState } from 'AuthTypes';

export const login = createAsyncAction('@@login/REQUEST', '@@login/SUCCESS', '@@login/FAILURE')<
  undefined,
  AuthState,
  string
>();

export const logout = createStandardAction('@@login/LOGOUT')();
