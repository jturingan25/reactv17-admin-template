import React, { lazy, Suspense } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import ErrorBoundary from './ErrorBoundary';
import { PUBLIC_ROUTE } from './route.constants';
import Loader from '@tminds/components/utility/loader';

const AppContainer = lazy(() => import('@tminds/containers/App/App'));

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import('@tminds/containers/Pages/SignIn/SignIn')),
  },
  {
    path: PUBLIC_ROUTE.PAGE_404,
    component: lazy(() => import('@tminds/containers/Pages/404/404')),
  },
  {
    path: PUBLIC_ROUTE.PAGE_500,
    component: lazy(() => import('@tminds/containers/Pages/500/500')),
  },
  {
    path: PUBLIC_ROUTE.SIGN_IN,
    component: lazy(() => import('@tminds/containers/Pages/SignIn/SignIn')),
  },
 /* {
    path: PUBLIC_ROUTE.SIGN_UP,
    component: lazy(() => import('@tminds/containers/Pages/SignUp/SignUp')),
  },
  {
    path: PUBLIC_ROUTE.FORGET_PASSWORD,
    component: lazy(() =>
      import('@tminds/containers/Pages/ForgotPassword/ForgotPassword')
    ),
  },
  {
    path: PUBLIC_ROUTE.RESET_PASSWORD,
    component: lazy(() =>
      import('@tminds/containers/Pages/ResetPassword/ResetPassword')
    ),
  },
  */
  {
    path: PUBLIC_ROUTE.AUTH0_CALLBACK,
    component: lazy(() =>
      import('@tminds/containers/Authentication/Auth0/Auth0Callback')
    ),
  },
];
function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            <PrivateRoute path="/app">
              <AppContainer />
            </PrivateRoute>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
