import React from 'react';
import { Home } from './home';
import { useStyles } from './use-styles';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { useAppStyles } from 'mic-global';

export function Pages(): React.ReactElement {
  useStyles();
  useAppStyles();

  return (
    <HashRouter>
      <Switch>
        <Route exact path='/**' component={Home} />
      </Switch>
    </HashRouter>
  );
}