
const initialState = {
  avatarUrl: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AVATAR_URL':
      return {
        ...state,
        avatarUrl: action.payload
      }
    case 'SET_AS_ADMIN':
      return {
        ...state,
        isAdmin: true
      }
    case 'SET_USER':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

