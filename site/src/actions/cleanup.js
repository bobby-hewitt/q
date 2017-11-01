export const removeEventFromState = () => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_EVENT_FROM_STATE'
    })
  }
}


