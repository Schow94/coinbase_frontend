import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login';
import BtcPriceApp from './BtcPriceApp';
import SignUp from './SignUp';
import About from './About';
import Home from './Home';
import './styles/App.css';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/about`}
          component={About}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/historic`}
          component={BtcPriceApp}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/login`}
          component={Login}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/signup`}
          component={SignUp}
        />
      </Switch>
    </Router>
  );
}

export default App;
