const blankApplicant = {
  _id: '',
  title: '',
  imageUrl: '',
  videoUrl: '',
}

const initialState = {
  applicants: null,
  applicant: blankApplicant
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_APPLICANTS':
      return {
        ...state,
        applicants: action.payload
      }
    case 'SET_APPLICANT':
      return {
        ...state,
        applicant: action.payload
      }
    case 'REMOVE_APPLICANT_FROM_STATE':
      return {
        ...state,
        applicant : blankApplicant
      }
    default:
      return state
  }
}

