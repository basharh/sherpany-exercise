import React from 'react';
import { connect } from 'react-redux';
import Agenda from '../components/Agenda';

const mapStateToProps = (state) => ({
  agenda: state.app.agenda,
});

export default connect(mapStateToProps)(Agenda);
