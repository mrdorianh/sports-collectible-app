import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import * as Views from './views';

type Props = {
  authState?: string,
};

const history = createBrowserHistory();

const Routes = ({ authState }: Props) =>
  authState !== 'signedIn' ? null : (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Views.Home} />
        <Route path="/dashboard" component={Views.Dashboard} />
        <Route path="/profile" component={Views.Profile} />
      </Switch>
    </Router>
  );

export default Routes;
