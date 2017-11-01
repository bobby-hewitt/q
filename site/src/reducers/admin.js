
const initialState = {
  users: null,
  investments: null,
  isAdmin: null,
  menuItem: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'SET_INVESTMENTS':
      return {
        ...state,
        investments: action.payload
      }
    case 'SET_AS_ADMIN':
      return {
        ...state,
        isAdmin: true
      }
    case 'ADMIN_MENU_ITEM_CLICK':
      return {
        ...state,
        menuItem: action.payload
      }
    default:
      return state
  }
}

