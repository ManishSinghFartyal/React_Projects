import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import About from './views/About/About.js'
import Home from './views/Home/Home.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
