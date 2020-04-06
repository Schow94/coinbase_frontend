import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BtcPriceApp from './BtcPriceApp';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/historic" component={BtcPriceApp} />
      </Switch>
    </Router>
  );
}

export default App;
