export const currentState = (state = {}, action) => {
  switch (action.type) {
    case'ADD_STATE_INFO' :
      return action.statesInfo
    default:
      return state;
  }
}