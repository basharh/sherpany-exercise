import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Tabs from '../components/Tabs';
import Details from '../components/Details';
import Agenda from '../components/Agenda';

class App extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <Route component={Tabs} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/agenda" component={Agenda} />
      </div>
    );
  }
}

export default connect()(App);

