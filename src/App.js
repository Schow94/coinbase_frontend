import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BtcPriceApp from './BtcPriceApp';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <Navbar />
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
      </Switch>
    </Router>
  );
}

export default App;
