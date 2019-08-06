import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PrivateRouteInterface from './PrivateRouteInterface';

const PrivateRoute: React.FC<PrivateRouteInterface> = (props) => {
  const { component: Component, location } = props;
  const injectedProps = { ...props };

  delete injectedProps.component;

  const token = useSelector((state: any) => state.auth.token);

  const unauthenticated = { pathname: '/', state: { from: location } };

  return (
    <Route
      {...injectedProps}
      render={(routeProps: any) => {
        if (!token) {
          return <Redirect to={unauthenticated} />;
        }

        return <Component {...routeProps} />;
      }}
    />
  );
};

export default PrivateRoute;
