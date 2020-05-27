import React from 'react';
import { Home } from '../home';
import { useStyles } from './use-styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export function App(): React.ReactElement {
  useStyles();

  // React.useCallback
  // React.useContext
  // React.useEffect
  // React.useMemo
  // React.useReducer
  // React.useRef
  // React.useState

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/**' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}