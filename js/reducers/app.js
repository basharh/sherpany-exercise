import { TOGGLE_UPLOAD } from '../actions/app';

const agendaItems = [
  'Admin',
  'Minutes Last Meeting',
  'Performance / Key Initiatives',
  'Management Update',
  'Country Managers Outlook',
  'Sales Marketing',
  'Enter a new Agenda Item',
];

export default (state = {
  activeTab: 'details',
  agenda: agendaItems,
  isUploadShown: true,
}, action) => {
  switch (action.type) {
    case TOGGLE_UPLOAD:
      return {
        ...state,
        isUploadShown: !state.isUploadShown,
      }
    default:
      return state;
  }
};
