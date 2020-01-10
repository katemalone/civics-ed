import { combineReducers } from 'redux';
import { currentState } from './currentState';
import { statesList } from './statesList'

const rootReducer = combineReducers({
  statesList,
  currentState
});

export default rootReducer;