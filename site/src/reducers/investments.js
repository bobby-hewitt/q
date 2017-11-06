const blankInvestment = {
  _id: '',
  title: '',
  imageUrl: '',
  videoUrl: '',
}

const initialState = {
  investments: null,
  investment: blankInvestment
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INVESTMENTS':
      return {
        ...state,
        investments: action.payload
      }
    case 'SET_INVESTMENT':
      return {
        ...state,
        investment: action.payload
      }
    case 'EDIT_INVESTMENT_INPUT_VALUE':
      return {
        ...state,
        investment : {
          ...state.investment,
          [action.payload.target]: action.payload.value
        }
       
      }
      case 'REMOVE_INVESTMENT_FROM_STATE':
      return {
        ...state,
        investment : blankInvestment
      }
    default:
      return state
  }
}

