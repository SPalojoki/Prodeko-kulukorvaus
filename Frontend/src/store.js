import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import basicInfoReducer from './reducers/basicInfoReducer';
import thunk from 'redux-thunk';
import expenditureReducer from './reducers/expenditureReducer';

//Main configs for Redux state

const combinedReducer = combineReducers({
  basicInfo: basicInfoReducer,
  expenditures: expenditureReducer
});

const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;