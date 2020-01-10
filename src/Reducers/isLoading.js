export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      action.bool;
    default: 
    return state;
  }
}