/* eslint-disable indent */
import uniquid from 'uniqid';


//TODO: These could be done without Redux-thunk. Needs some refactoring.

export const addExpenditure = (newExpenditure) => {
  return (dispatch, getState) => {
    const { expenditures } = getState();
    const id = uniquid();
    
    dispatch({
      type: 'SET_EXPENDITURES',
      expenditures: expenditures.concat({...newExpenditure, id})
    });
  };
};

export const editExpenditure = (modifiedExpenditure) => {
  return (dispatch, getState) => {
    const { expenditures } = getState();

    const updatedExpenditures = expenditures.map(expenditure => expenditure.id === modifiedExpenditure.id
      ? modifiedExpenditure
      : expenditure);
      
      dispatch({
        type: 'SET_EXPENDITURES',
        expenditures: updatedExpenditures
      });
  };
};

export const deleteExpenditure = (id) => {
  return (dispatch, getState) => {
    const { expenditures } = getState();
    const updatedExpenditures = expenditures.filter(expenditure => expenditure.id != id );

    dispatch({
      type: 'SET_EXPENDITURES',
      expenditures: updatedExpenditures
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