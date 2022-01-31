/* eslint-disable indent */

export const setError = (text) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_ERROR',
      text
    });
  };
};

export const clearError = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_ERROR',
    });
  };
};


const errorReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_ERROR':
      return action.text;
    case 'CLEAR_ERROR':
      return null;
    default:
      return state;
  }
};

export default errorReducer;