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
  console.log('in user login action')
  return(dispatch) => {
    $.post(payload.url + '/user/login', payload.payload, function(response){   
        console.log('login request recieved response: ')
        console.log(response)
        if (window.localStorage){
          console.log('setting new token in local storage')
          window.localStorage.qVenturesAuth = response.token
        }
        dispatch(push('registration-complete'))
        dispatch({
          type: 'HIDE_ERROR'
        })
        dispatch({
          type: 'LOGGED_IN',
          payload: response.token,
        })
        dispatch({
          type:'SET_USER',
          payload: response.user._doc
        })
        dispatch(push(payload.redirect))
    }) 
    .fail(function(err) {
      console.log('error logging in')
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
    console.log(payload)
     $.ajax({
          type: "POST", //GET, POST, PUT
          url: payload.url + '/user/authenticateWithJWT',  //the url to call
          contentType: "application/json",           
          headers: {"jwt": payload.jwt},
      }).done(function (response) {
            console.log(response)
            dispatch({
              type:'SET_USER',
              payload: response
            })
            dispatch({
              type: 'HIDE_ERROR'
            })
            dispatch({
              type: 'LOGGED_IN',
              payload: payload.jwt
            })
      }).fail(function (err)  {
        console.log('error authenticating with existing token')
        console.log(err)
      });
    dispatch({
      type: 'SET_AUTH_TOKEN',
      payload: payload
    })
  }
}

export const setImageUrl = (payload) => {
  return(dispatch) => {
    dispatch({
      type: 'SET_IMAGE_URL',
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







