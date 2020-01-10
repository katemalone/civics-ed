export const statesList = (state = [], action) => {
  switch(action.type) {
    case 'ADD_STATE_LIST':
      return action.states;
    default: 
    return state
  }
}