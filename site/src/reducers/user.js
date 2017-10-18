
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
    default:
      return state
  }
}

