
const initialState = {
  showError: false,
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ERROR':
      return {
        ...state,
        showError: true,
        errorMessage: action.payload
      }
    case 'HIDE_ERROR':
      return {
        ...state,
        showError:false,
        errorMessage: ''
      }
    default:
      return state
  }
}

