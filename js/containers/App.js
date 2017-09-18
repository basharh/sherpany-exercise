import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Details from '../components/Details';

import Tabs from '../containers/Tabs';
import BottomMenu from '../containers/BottomMenu';
import Upload from '../containers/Upload';
import Agenda from '../containers/Agenda';

class App extends React.Component {
  render() {
    let { isUploadShown } = this.props;
    return (
      <div id="dashboard">
        <Switch><Redirect exact from="/" to="/details" /></Switch>
        <Route component={Tabs} />
        <Route path="/details" component={Details} />
        <Route path="/agenda" component={Agenda} />
        { isUploadShown ? <Upload /> : null }
        <BottomMenu />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isUploadShown: state.app.isUploadShown,
  location: state.router.location,
});

export default connect(mapStateToProps)(App);
