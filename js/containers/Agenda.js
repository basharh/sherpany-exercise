import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Agenda from '../components/Agenda';

import { addItem } from '../actions/app'

const mapStateToProps = (state) => ({
  agenda: state.app.agenda,
});

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators( { onNewItem: addItem }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Agenda);
