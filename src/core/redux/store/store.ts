import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from '../../../config/history';
import sagas from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [routerMiddleware(history), sagaMiddleware];

const composeEnhancers = composeWithDevTools({});

const persistConfig = {
  key: 'TestProEnem',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers(history));

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
