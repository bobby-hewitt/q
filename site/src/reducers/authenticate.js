
const initialState = {
  redirectTo: '/'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO_TO_LOGIN':
      return {
        ...state,
        redirectTo: action.payload
      }
    case 'LOGGED_IN':
      return {
        ...state,
        token: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        token: null
      }
    case 'SET_AUTH_TOKEN':
      console.log('SETTING AUTH TOKEN TO STATE: ', action.payload)
      return {
        ...state,
        token: action.payload
      }
    case 'SET_PASSWORD_RESET_TOKEN':
      return {
        ...state,
        passwordResetToken: action.payload
      }
    case 'TOGGLE_ALLOW_PASSWORD_RESET':
      console.log(state)
      return {
        ...state,
        allowPasswordReset: action.payload
      }
    default:
      return state
  }
}

