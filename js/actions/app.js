export const TOGGLE_UPLOAD = 'TOGGLE_UPLOAD';
export const CLOSE_UPLOAD = 'CLOSE_UPLOAD';
export const ADD_FILES = 'ADD_FILES';

export const toggleUpload = () => ({
  type: TOGGLE_UPLOAD,
});

export const closeUpload = () => ({
  type: CLOSE_UPLOAD,
});

export const addFiles = (files) => ({
  type: ADD_FILES,
  files
});
