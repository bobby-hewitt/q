
const initialState = {

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
      console.log('setting user', action.payload)
      return {
        ...action.payload
      }
    case 'LOGOUT':
    return {

    }
    default:
      return state
  }
}

