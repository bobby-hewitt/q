
const initialState = {
  image: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IMAGE_URL':
      return {
        ...state,
        imageUrl: action.payload
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

