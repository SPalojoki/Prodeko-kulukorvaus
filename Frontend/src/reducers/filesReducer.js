/* eslint-disable indent */

export const modifyFiles = (file) => {
  return (dispatch, getState) => {
    const { files } = getState();

    dispatch({
      type: 'MODIFY_FILES',
      updatedFiles: files.concat(file)
    });
  };
};


const filesReducer = (state = [], action) => {
  switch(action.type) {
    case 'MODIFY_FILES':
      return action.updatedFiles;
    case 'CLEAR_FILES':
      return [];
    default:
      return state;
  }
};

export default filesReducer;