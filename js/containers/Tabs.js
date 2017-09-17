import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import Tabs from '../components/Tabs';

const mapStateToProps = (state) => ({
  activeTab: state.app.activeTab,
});

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators( { push }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
