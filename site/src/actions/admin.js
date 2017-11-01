import $ from 'jquery'
import { push } from 'react-router-redux'

export const getUsers = (payload) => {
  return(dispatch) => {
    console.log('in users action')
    $.ajax({
      url: payload.url + '/admin/users',
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log('RESPONSE', response)
        dispatch({
          type: 'GET_USERS',
          payload: response
        })
      },
      error: function(err){
        console.log('returned an error')
        dispatch(push('/login'))
        console.log('ERROR fetching users', err)
        dispatch({
          type: 'LOGOUT'
        })
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

export const approveUser = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/approveUser/' + payload.user,
      type: "POST",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        dispatch({
          type: 'GET_USERS',
          payload: response
        })
      },
      error: function(err){
        console.log(err)
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

export const rejectUser = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/rejectUser/' + payload.user,
      type: "POST",
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log(response)
      },
      error: function(err){
        console.log(err)
        // dispatch(push('/login'))
        // dispatch({
        //   type: 'GO_TO_LOGIN',
        //   payload: '/admin'
        // })
        // dispatch({
        //   type: 'SHOW_ERROR',
        //   payload: 'Please login with a registered Admin user account'
        // })
      }
    });
  }
}


export const submitNewInvestment = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/addInvestment/',
      type: "POST",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
        console.log('investment added successfully')
      },
      error: function(err){
        console.log(err)
      //   dispatch(push('/login'))
      //   dispatch({
      //     type: 'GO_TO_LOGIN',
      //     payload: '/admin'
      //   })
      //   dispatch({
      //     type: 'SHOW_ERROR',
      //     payload: 'Please login with a registered Admin user account'
      //   })
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
        console.log(err)
      //   dispatch(push('/login'))
      //   dispatch({
      //     type: 'GO_TO_LOGIN',
      //     payload: '/admin'
      //   })
      //   dispatch({
      //     type: 'SHOW_ERROR',
      //     payload: 'Please login with a registered Admin user account'
      //   })
      }
    });
  }
}

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
               console.log(response)
      },
      error: function(err){
        console.log(err)
      //   dispatch(push('/login'))
      //   dispatch({
      //     type: 'GO_TO_LOGIN',
      //     payload: '/admin'
      //   })
      //   dispatch({
      //     type: 'SHOW_ERROR',
      //     payload: 'Please login with a registered Admin user account'
      //   })
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
        console.log(err)
      //   dispatch(push('/login'))
      //   dispatch({
      //     type: 'GO_TO_LOGIN',
      //     payload: '/admin'
      //   })
      //   dispatch({
      //     type: 'SHOW_ERROR',
      //     payload: 'Please login with a registered Admin user account'
      //   })
      }
    });
  }
}

export const deleteEvent = (payload) => {
  return(dispatch) => {
    $.ajax({
      url: payload.url + '/admin/deleteEvent/',
      type: "POST",
      data: payload.data,
      beforeSend: function(xhr){xhr.setRequestHeader('jwt', payload.jwt);},
      success: function(response) { 
       console.log(response)
      dispatch({
          type: 'SET_EVENTS',
          payload: response
        })
      },
      error: function(err){
        console.log(err)
      //   dispatch(push('/login'))
      //   dispatch({
      //     type: 'GO_TO_LOGIN',
      //     payload: '/admin'
      //   })
      //   dispatch({
      //     type: 'SHOW_ERROR',
      //     payload: 'Please login with a registered Admin user account'
      //   })
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
        console.log(err)
      //   dispatch(push('/login'))
      //   dispatch({
      //     type: 'GO_TO_LOGIN',
      //     payload: '/admin'
      //   })
      //   dispatch({
      //     type: 'SHOW_ERROR',
      //     payload: 'Please login with a registered Admin user account'
      //   })
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



