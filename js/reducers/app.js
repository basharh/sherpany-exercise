import { TOGGLE_UPLOAD, CLOSE_UPLOAD, UPLOAD_FILES, ADD_FILES, ADD_ITEM } from '../actions/app';

const agendaItems = [
  { text: 'Admin', files: [] },
  { text: 'Minutes Last Meeting', files: [] },
  { text: 'Performance / Key Initiatives', files: [] },
  { text: 'Management Update', files: [] },
  { text: 'Country Managers Outlook', files: [] },
  { text: 'Sales Marketing', files: [] },
];

function isFileForAgendaItem(agendaItem, file) {
  let tokens = agendaItem.text.toLowerCase().split(' ');

  // true if file name contains every token in agenda text
  return tokens.every((token) => file.name.toLowerCase().indexOf(token) > -1);
}

function addFilesToAgenda(agenda, files) {
  return agenda.map((agendaItem) => {
    let tokens = agendaItem.text.toLowerCase().split(' ');

    let matchingFiles = files.filter((file) => {
      return isFileForAgendaItem(agendaItem, file);
    });

    agendaItem.files = agendaItem.files.concat(matchingFiles);

    return agendaItem;
  });
}

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
    case UPLOAD_FILES:
      return {
        ...state,
        files: [...state.files, ...action.files],
      }
    case ADD_FILES:
      let newAgenda = addFilesToAgenda(state.agenda, state.files);
      return {
        ...state,
        agenda: [...newAgenda],
        files: [],
        isUploadShown: false,
      }
    case ADD_ITEM:
      let newItem = { text: action.text, files: [] };
      return {
        ...state,
        agenda: [...state.agenda, newItem],
      }
    default:
      return state;
  }
};
