import { createAsyncAction } from 'typesafe-actions';
import { PersonState } from 'PersonTypes';

export const person = createAsyncAction('@@person/REQUEST', '@@person/SUCCESS', '@@person/FAILURE')<
  undefined,
  PersonState,
  string
>();
