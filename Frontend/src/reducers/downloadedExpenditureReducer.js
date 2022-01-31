/* eslint-disable indent */

export const storeExpenditure = (file) => {
  return (dispatch) => {
    dispatch({
      type: 'STORE_EXPENDITURE',
      file
    });
  };
};

export const clearExpenditure = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_EXPENDITURE',
    });
  };
};



const downloadedExpenditureReducer = (state = null, action) => {
  switch(action.type) {
    case 'STORE_EXPENDITURE':
      return action.file;
    case 'CLEAR_EXPENDITURE':
      return null;
    default:
      return state;
  }
};

export default downloadedExpenditureReducer;