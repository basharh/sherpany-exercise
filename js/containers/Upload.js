import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Upload from '../components/Upload';

import { closeUpload, addFiles } from '../actions/app'

const mapStateToProps = (state) => ({
  files: state.app.files,
});

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators( { closeUpload, addFiles }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
