import React, { useEffect } from 'react';
import Auth0 from './Auth0';
import authActions from '@tminds/redux/auth/actions';
const Auth0Callback = () => {
  useEffect(() => {
    Auth0.handleAuthentication();
    authActions.login();
  }, []);

  return <p>Loading ...</p>;
};

export default Auth0Callback;
