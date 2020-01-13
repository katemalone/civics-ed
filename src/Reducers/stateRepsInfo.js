export const stateRepsInfo = (state = {}, action) => {
  switch(action.type){
    case 'SET_REP_INFO':
      return action.reps;
    default: 
    return state;
  }
}