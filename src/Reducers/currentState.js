export const currentState = (state = {}, action) => {
  switch (action.type) {
    case'ADD_STATE_INFO' :
    console.log("action", action.statesInfo)
      return action.statesInfo
    default:
      return state;
  }
}