export const currentState = (state = {}, action) => {
  switch (action.type) {
    case'ADD_STATE_INFO' :
    console.log("action", action.state)
      return action.state
    default:
      return state;
  }
}