export const stateReps = (state = {}, action) => {
  switch(action.type){
    case 'SET_REP_INFO':
      return action.reps;
    default: 
    return state;
  }
}