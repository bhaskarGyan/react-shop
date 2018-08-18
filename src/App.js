import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './component/Header';
import Dashboard from './scenes/Dashboard';
import './App.css';

const App = () => {
  const Layout = ({ match }) => (
    <div>
      <Header />
      <Route path={`${match.path}dashboard`} exact component={Dashboard} />
    </div>
  );
  return (
    <div className="app-root">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
