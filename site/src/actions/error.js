export const showError = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SHOW_ERROR',
      payload: payload
    })
  }
}

export const hideError = () => {
  return dispatch => {
    dispatch({
      type: 'HIDE_ERROR'
    })
  }
}

