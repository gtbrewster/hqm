import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MovesPage from './pages/MovesPage';
import InstallationPage from './pages/InstallationPage';
import MaintenancePage from './pages/MaintenancePage';




class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Moving' component={MovesPage} />
        <Route exact path='/Installation' component={InstallationPage} />
        <Route exact path='/Maintenance' component={MaintenancePage} />
        
        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
