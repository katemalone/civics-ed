import { combineReducers } from 'redux';
import { currentState } from './currentState';
import { statesList } from './statesList'
import { isLoading } from './isLoading'

const rootReducer = combineReducers({
  statesList,
  currentState,
  isLoading
});

export default rootReducer;