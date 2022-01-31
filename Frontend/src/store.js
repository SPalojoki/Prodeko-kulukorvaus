import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import basicInfoReducer from './reducers/basicInfoReducer';
import thunk from 'redux-thunk';
import expenditureReducer from './reducers/expenditureReducer';
import selectedFileReducer from './reducers/selectedFileReducer';
import filesReducer from './reducers/filesReducer';
import downloadedExpenditureReducer from './reducers/downloadedExpenditureReducer';

//Main configs for Redux state

const combinedReducer = combineReducers({
  basicInfo: basicInfoReducer,
  expenditures: expenditureReducer,
  selectedFile: selectedFileReducer,
  files: filesReducer,
  downloadedExpenditure: downloadedExpenditureReducer
});

const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;