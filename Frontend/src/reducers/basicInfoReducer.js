/* eslint-disable indent */

const initialValue = {
  name: '',
  email: '',
  phone: '',
  iban: '',
  bic: ''
};


export const setBasicInfo = basicInfo => {
  return {
    type: 'SET_BASIC_INFO',
    basicInfo
  };
};

export const clearBasicInfo = () => {
  return {
    type: 'SET_BASIC_INFO',
    basicInfo: initialValue
  };
};

const basicInfoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_BASIC_INFO':
      return action.basicInfo;
    default:
      return state;
  }
};


export default basicInfoReducer;