/* eslint-disable indent */

export const setFile = (file) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_FILE',
      file
    });
  };
};

export const clearFile = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_FILE',
    });
  };
};

const selectedFileReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_FILE':
      return action.file;
    case 'CLEAR_FILE':
      return null;
    default:
      return state;
  }
};

export default selectedFileReducer;