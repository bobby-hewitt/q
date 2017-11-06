export const removeEventFromState = () => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_EVENT_FROM_STATE'
    })
  }
}

export const removeInvestmentFromState = () => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_INVESTMENT_FROM_STATE'
    })
  }
}

export const removeMemberFromState = () => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_MEMBER_FROM_STATE'
    })
  }
}


