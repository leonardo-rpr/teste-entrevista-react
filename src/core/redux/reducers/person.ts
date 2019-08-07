import { createReducer } from 'typesafe-actions';
import { PersonState } from 'PersonTypes';
import { PersonActions } from '../actions';

const { person } = PersonActions;

const initialState = {
  user: {
    name: '',
    avatar: null,
    email: '',
    courses: [],
  },
  loading: false,
};

const reducer = createReducer(initialState as PersonState)
  .handleAction(person.request, state => ({ ...state, loading: true }))
  .handleAction(person.success, (state, { payload }) => ({
    ...state,
    ...initialState,
    user: payload,
  }))
  .handleAction(person.failure, state => ({
    ...state,
    loading: false,
  }));

export default reducer;
