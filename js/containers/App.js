import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Tabs from '../components/Tabs';
import Details from '../components/Details';
import BottomMenu from '../containers/BottomMenu';
import Upload from '../containers/Upload';

import Agenda from '../containers/Agenda';

class App extends React.Component {
  render() {
    let { isUploadShown } = this.props;
    return (
      <div id="dashboard">
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
});

export default connect(mapStateToProps)(App);
