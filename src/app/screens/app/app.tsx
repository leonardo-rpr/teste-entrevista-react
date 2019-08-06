import React from 'react';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import history from 'config/history';
import { store, persistor } from 'store';
import { SignIn, Profile } from 'screens';
import { PrivateRoute } from 'components';

import { GlobalStyles } from './App.styles';

toast.configure({ position: toast.POSITION.TOP_RIGHT });

const App: React.FC<{}> = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" name="SignIn" component={SignIn} />
          <PrivateRoute exact path="/profile" name="Profile" component={Profile} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
