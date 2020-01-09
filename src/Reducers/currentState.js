export const currentState = (state = {}, action) => {
  switch (action.type) {
    case'ADD_STATE_INFO' :
    console.log("action", action)
      return action 
    default:
      return state;
  }
}