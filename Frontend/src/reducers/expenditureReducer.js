/* eslint-disable indent */

export const addExpenditure = (newExpenditure) => {
  return async (dispatch, getState) => {
    const { expenditures } = getState();
    const id = Math.max(expenditures.map(expenditure => expenditure.id)) + 1;
    
    dispatch({
      type: 'SET_EXPENDITURES',
      expenditures: expenditures.concat({...newExpenditure, id})
    });
  };
};

const expenditureReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_EXPENDITURES':
      return action.expenditures;
    case 'CLEAR_EXPENDITURES':
      return [];
    default:
      return state;
  }
};

export default expenditureReducer;