import { TOGGLE_UPLOAD, CLOSE_UPLOAD, ADD_FILES, ADD_ITEM } from '../actions/app';

const agendaItems = [
  'Admin',
  'Minutes Last Meeting',
  'Performance / Key Initiatives',
  'Management Update',
  'Country Managers Outlook',
  'Sales Marketing',
];

export default (state = {
  activeTab: 'details',
  agenda: agendaItems,
  isUploadShown: false,
  files: [],
}, action) => {
  switch (action.type) {
    case TOGGLE_UPLOAD:
      return {
        ...state,
        isUploadShown: !state.isUploadShown,
      }
    case CLOSE_UPLOAD:
      return {
        ...state,
        isUploadShown: false,
      }
    case ADD_FILES:
      return {
        ...state,
        files: [...state.files, ...action.files],
      }
    case ADD_ITEM:
      return {
        ...state,
        agenda: [...state.agenda, action.text],
      }
    default:
      return state;
  }
};
