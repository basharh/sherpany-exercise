import React from 'react';
import { connect } from 'react-redux';
import Tabs from '../components/Tabs';

const mapStateToProps = (state) => ({
  activeTab: state.app.activeTab,
});

export default connect(mapStateToProps)(Tabs);
