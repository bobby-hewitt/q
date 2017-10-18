import $ from 'jquery'
import { push } from 'react-router-redux'

export const register = (payload) => {
  return(dispatch) => {
    $.post(payload.url + '/user/register', payload.payload, function(response){   
        dispatch({
          type: 'HIDE_ERROR'
        })
        dispatch(push('/registration-complete'))
        dispatch({
          type: 'GO_TO_LOGIN',
          payload: '/'
        })
    }) 
    .fail(function(err) {
      dispatch({
        type: 'SHOW_ERROR',
        payload: err.responseJSON.error
      })
    })
  }
}

export const login = (payload) => {
  return(dispatch) => {
    $.post(payload.url + '/user/login', payload.payload, function(response){   
        if (window.localStorage){
          console.log('setting new token in local storage')
          window.localStorage.qVenturesAuth = response.token
        }
      
        dispatch({
          type: 'HIDE_ERROR'
        })
        dispatch({
          type: 'LOGGED_IN',
          payload: response.token
        })
        dispatch(push(payload.redirect))
    }) 
    .fail(function(err) {
      dispatch({
        type: 'SHOW_ERROR',
        payload: err.responseJSON.error
      })
    })
  }
}

export const logout = (payload) => {

    if (window.localStorage){    
      window.localStorage.qVenturesAuth = null
    }
    console.log('LOGGING OUT', window.localStorage.qVenturesAuth)
  return(dispatch) => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}


export const setAuthToken = (payload) => {
  return(dispatch) => {
    dispatch({
      type: 'SET_AUTH_TOKEN',
      payload: payload
    })
  }
}

export const setAvatarUrl = (payload) => {
  return(dispatch) => {
    dispatch({
      type: 'SET_AVATAR_URL',
      payload: payload
    })
  }
}

export const authenticateWithJWT = (payload) => {
  return(dispatch) => {
      $.ajax({
          type: "POST", //GET, POST, PUT
          url: payload.url + '/user/authenticateWithJWT',  //the url to call
          contentType: "application/json",           
          headers: {"jwt": payload.payload},
      }).done(function (response) {
            dispatch(push('/registration-complete'))
            dispatch({
              type: 'HIDE_ERROR'
            })
            dispatch({
              type: 'LOGGED_IN',
              payload: response.token
            })
      }).fail(function (err)  {
        console.log('error authenticating with existing token')
        console.log(err)
      });
  }
}





export const passwordResetRequest = (payload) => {
  return(dispatch) => {
    $.post(payload.url + '/user/passwordResetRequest', payload.payload, function(response){   
      console.log('Password reset email sent successfully')
    }) 
    .fail(function(err) {
      console.log('Error from reset request')
    })
  }
}

export const setPasswordResetToken = (payload) => {
  return(dispatch) => {
    dispatch({
      type: 'SET_PASSWORD_RESET_TOKEN',
      payload: payload
    })
  }
}

export const toggleAllowPasswordReset = (payload) => {
  return(dispatch) => {
    dispatch({
      type: 'TOGGLE_ALLOW_PASSWORD_RESET',
      payload: payload
    })
  }
}







