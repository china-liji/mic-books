import React from 'react';
import { Home } from '../pages/home';
import { useStyles } from './use-styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAppStyles } from 'mic-global';

export function App(): React.ReactElement {
  useStyles();
  useAppStyles();

  return (
    <BrowserRouter basename='mic-books'>
      <Switch>
        <Route exact path='/**' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}