
const initialState = {
  menuItem: null,
  administrators: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN_MENU_ITEM_CLICK':
      return {
        ...state,
        menuItem: action.payload
      }
    case 'SET_ADMINISTRATORS':
      return {
        ...state,
        administrators: action.payload
      }
    default:
      return state
  }

}

