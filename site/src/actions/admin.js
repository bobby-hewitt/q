import $ from 'jquery'
import { push } from 'react-router-redux'


//Manage Applications

export const getApplicants = (payload) => {
  return(dispatch) => {
    console.log('in users action')
    $.ajax({
      url: payload.url + '/admin/applicants',
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log('RESPONSE FROM GET APPLICANTS', response)
        dispatch({
          type: 'SET_APPLICANTS',
          payload: response
        })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const getApplicant = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/user/' + payload.data,
      type: "GET",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log(response)
       dispatch({
          type: 'SET_APPLICANT',
          payload: response
       })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const approveApplicant = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/approveApplicant/' + payload.data,
      type: "POST",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        dispatch({
          type: 'GET_APPLICANTS',
          payload: response
        })
        dispatch(push('/admin/applicants'))
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
        dispatch(push('/login'))
        dispatch({
          type: 'GO_TO_LOGIN',
          payload: '/admin'
        })
        dispatch({
          type: 'SHOW_ERROR',
          payload: 'Please login with a registered Admin user account'
        })
      }
    });
  }
}

export const rejectApplicant = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/rejectApplicant/' + payload.data,
      type: "POST",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) {
        console.log('SUCCESS REMOVING APLICANT', response) 
         dispatch({
          type: 'GET_APPLICANTS',
          payload: response
        })
        dispatch(push('/admin/applicants'))
      },
      error: function(err){
        console.log('ERROR REJECTING APPLICANT', err)
      }
    });
  }
}

//Manage members

export const getMembers = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/members',
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log('RESPONSE FROM GET MEMBERS', response)
        dispatch({
          type: 'SET_MEMBERS',
          payload: response
        })
      },
      error: function(err){
        console.log('GET MEMBERS ERR', err)
      }
    });
  }
}

export const getMember = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/user/' + payload.data,
      type: "GET",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log(response)
       dispatch({
          type: 'SET_MEMBER',
          payload: response
       })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const revokeMembership = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/revokeMembership/' + payload.data,
      type: "POST",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        dispatch({
          type: 'SET_MEMBERS',
          payload: response
        })
        dispatch({
          type:'REMOVE_MEMBER_FROM_STATE'
        })
        dispatch(push('/admin/members'))
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

// Manage investments

export const submitNewInvestment = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/addInvestment/',
      type: "POST",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        dispatch({
          type: 'REMOVE_INVESTMENT_FROM_STATE'
        })
        dispatch(push('/admin/investments'))
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const getInvestments = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/getInvestments/',
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log(response)
        dispatch({
          type: 'SET_INVESTMENTS',
          payload: response
        })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const deleteInvestment = (payload) => {
  console.log('IN DELETE INVESTMENT ACTION')
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/deleteInvestment/',
      type: "POST",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
      dispatch(push('/admin/investments'))
      dispatch({
          type: 'SET_INVESTMENTS',
          payload: response
        })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const editInvestment = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/editInvestment/' + payload.data,
      type: "GET",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) {
      console.log(response) 
       dispatch({
          type: 'SET_INVESTMENT',
          payload: response
       })
       dispatch(push('/admin/investments/edit'))
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const editInvestmentInputValue = (payload) => {
  return dispatch => {
    dispatch({
      type: 'EDIT_INVESTMENT_INPUT_VALUE',
      payload
    })
  }
}

export const editInvestmentUpdateInputValue = (payload) => {
  return dispatch => {
    dispatch({
      type: 'EDIT_INVESTMENT_UPDATE_INPUT_VALUE',
      payload
    })
  }
}

//Manage events

export const submitNewEvent = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/addEvent/',
      type: "POST",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
          dispatch(push('/admin/events'))
          dispatch({
            type: 'REMOVE_EVENT_FROM_STATE'
          })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const getEvents = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/events/',
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log(response)
        dispatch({
          type: 'SET_EVENTS',
          payload: response
        })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const deleteEvent = (payload) => {
  console.log('IN DELETE EVENT ACTION')
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/deleteEvent/',
      type: "POST",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
      dispatch(push('/admin/events'))
      dispatch({
          type: 'SET_EVENTS',
          payload: response
        })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const editEvent = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/editEvent/' + payload.data,
      type: "GET",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
       dispatch({
          type: 'SET_EVENT',
          payload: response
       })
       dispatch(push('/admin/events/edit'))
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

//Admin

export const getAdministrators = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/administrators',
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log('RESPONSE FROM GET APPLICANTS', response)
        dispatch({
          type: 'SET_ADMINISTRATORS',
          payload: response
        })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const removeAdminRights = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/removeAdminRights/' + payload.data,
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log('RESPONSE FROM GET APPLICANTS', response)
        dispatch({
          type: 'SET_ADMINISTRATORS',
          payload: response
        })
      },
      error: function(err){
        console.log('ERROR WITH API CALL', err)
      }
    });
  }
}

export const editEventInputValue = (payload) => {
  return dispatch => {
    dispatch({
      type: 'EDIT_EVENT_INPUT_VALUE',
      payload
    })
  }
}

export const addInvestmentFile = (payload) => {
  return dispatch => {
    dispatch({
      type: 'ADD_INVESTMENT_FILE',
      payload
    })
  }
}

export const deleteInvestmentFile = (payload) => {
  return dispatch => {
    dispatch({
      type: 'DELETE_INVESTMENT_FILE',
      payload
    })
  }
}

export const setAsAdmin = () => {
  return dispatch => {
    dispatch({
      type: 'SET_AS_ADMIN'
    })
  }
}

export const goToLogin = () => {
  return dispatch => {
    dispatch(push('/login'))
    dispatch({
      type: 'GO_TO_LOGIN',
      payload: '/admin'
    })
  }
}

export const adminMenuItemClick = (item) => {
  return dispatch => {
    dispatch({
      type: 'ADMIN_MENU_ITEM_CLICK',
      payload: item
    })
    dispatch(push('/admin/' + item))
  }
}



