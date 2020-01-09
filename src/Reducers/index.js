import { combineReducers } from 'redux';
import { currentState } from './currentState';

const rootReducer = combineReducers({
  currentState
});

export default rootReducer;