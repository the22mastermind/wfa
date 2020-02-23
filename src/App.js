import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import LandingPage from './components/pages/LandingPage';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Dashboard from './components/pages/Dashboard';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
