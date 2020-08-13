import React from 'react';
import Landingpage from './Landingpage';
import Animals from './Animals'
import Sounds from './Sounds'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


function Router () {
  return (
    <BrowserRouter>
            <Switch>
          <Route path="/animals">
            <Animals />
          </Route>
          <Route path="/sounds">
            <Sounds />
          </Route>
          <Route path="/">
            <Landingpage />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Router;
