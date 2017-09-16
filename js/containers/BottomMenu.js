import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BottomMenu from '../components/BottomMenu';

import { toggleUpload } from '../actions/app'

const mapStateToProps = (state) => ({
  agenda: state.app.agenda,
});

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators( { toggleUpload }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu);
