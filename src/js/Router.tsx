import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./pages/App";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/movie-search'
          component={App}
        />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;