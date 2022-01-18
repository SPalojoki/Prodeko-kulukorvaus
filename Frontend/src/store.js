import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import basicInfoReducer from './reducers/basicInfoReducer';


//Main configs for Redux state

const combinedReducer = combineReducers({
  basicInfo: basicInfoReducer
});

const store = createStore(combinedReducer, composeWithDevTools());

export default store;