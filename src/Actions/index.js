export const addStateInfo = (statesInfo) => ({
  type: 'ADD_STATE_INFO',
  statesInfo
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING', 
  bool
})

export const addStatesList = (states) => ({
  type: 'ADD_STATE_LIST', 
  states
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})

export const setRepInfo = (reps) => ({
  type: 'SET_REP_INFO',
  reps
})