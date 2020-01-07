import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// PAGES COMPONENTS
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
