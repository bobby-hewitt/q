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

export const setAsAdmin = () => {
  return dispatch => {
    dispatch({
      type: 'SET_AS_ADMIN'
    })
  }
}

export const goToLogin = () => {
  console.log('going to login')
  return dispatch => {
    dispatch(push('/login'))
    dispatch({
      type: 'GO_TO_LOGIN',
      payload: '/admin'
    })
  }
}

