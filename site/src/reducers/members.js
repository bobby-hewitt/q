const blankMember = {
  _id: '',
  title: '',
  imageUrl: '',
  videoUrl: '',
}

const initialState = {
  members: null,
  member: blankMember
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MEMBERS':
      return {
        ...state,
        members: action.payload
      }
    case 'SET_MEMBER':
      return {
        ...state,
        member: action.payload
      }
    case 'REMOVE_MEMBER_FROM_STATE':
      return {
        ...state,
        member : blankMember
      }
    default:
      return state
  }
}

