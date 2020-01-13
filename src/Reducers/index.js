import { combineReducers } from 'redux';
import { currentState } from './currentState';
import { statesList } from './statesList';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg'
import { stateRepsInfo } from './stateRepsInfo'

const rootReducer = combineReducers({
  statesList,
  currentState,
  isLoading,
  errorMsg,
  stateRepsInfo
});

export default rootReducer;