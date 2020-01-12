import { combineReducers } from 'redux';
import { currentState } from './currentState';
import { statesList } from './statesList';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg'

const rootReducer = combineReducers({
  statesList,
  currentState,
  isLoading,
  errorMsg
});

export default rootReducer;