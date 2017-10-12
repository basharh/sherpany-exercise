export const TOGGLE_UPLOAD = 'TOGGLE_UPLOAD';
export const CLOSE_UPLOAD = 'CLOSE_UPLOAD';
export const UPLOAD_FILES = 'UPLOAD_FILES';
export const ADD_FILES = 'ADD_FILES';
export const ADD_ITEM = 'ADD_ITEM';

export const toggleUpload = () => ({
  type: TOGGLE_UPLOAD,
});

export const closeUpload = () => ({
  type: CLOSE_UPLOAD,
});

export const uploadFiles = (files) => ({
  type: UPLOAD_FILES,
  files
});

export const addFiles = () => ({
  type: ADD_FILES
});

export const addItem = (text) => ({
  type: ADD_ITEM,
  text
});
