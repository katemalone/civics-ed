import { combineReducers } from 'redux';
import { currentState } from './currentState';
import { statesList } from './statesList';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg'
import { stateReps } from './stateReps'

const rootReducer = combineReducers({
  statesList,
  currentState,
  isLoading,
  errorMsg,
  stateReps
});

export default rootReducer;