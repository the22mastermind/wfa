import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import LandingPage from './components/pages/LandingPage';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
