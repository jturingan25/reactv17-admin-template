import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@tminds/components/utility/loader';

const routes = [
  {
    path: 'table_ant',
    component: lazy(() => import('../../modules/Reports')),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
