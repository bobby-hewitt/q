
const initialState = {
  users: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'SET_AS_ADMIN':
      return {
        ...state,
        isAdmin: true
      }
    default:
      return state
  }
}

