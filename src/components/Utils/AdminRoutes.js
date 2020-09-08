import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function PrivateRoutes({component, ...props}) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAdminToken()
          ? <Component {...componentProps} /> 
          : <Redirect
            to={{
              pathname: '/admin',
              state: {from: componentProps.location}
            }}
          />
      )}
    />
  );
};