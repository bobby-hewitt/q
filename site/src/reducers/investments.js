const blankInvestment = {
  _id: '',
  title: '',
  imageUrl: '',
  videoUrl: '',
  files: [],
  updates: [{
    timestamp: 11111,
    copy: 'asdsadasdsa'
  },{
    timestamp: 11111,
    copy: 'asdsadasdsa'
  }],
  financeTarget: '',
  financePreMoneyVal: '',
  financeRevenue: '',
  financeComittedFunds: '',
  financeMinimumInvestment: '',
  description: '',
  feature1: '',
  feature2: '',
  feature3: '',
  newUpdate: '',
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
    case 'EDIT_INVESTMENT_UPDATE_INPUT_VALUE':
      let newUpdates = Object.assign([], state.investment.updates)
      newUpdates[action.payload.index].copy = action.payload.value
      return {
        ...state,
        investment: {
          ...state.investment,
          updates: newUpdates
        }
      }
    case 'ADD_INVESTMENT_FILE':
      let newFiles = Object.assign([], state.investment.files)
      newFiles.push(action.payload)
      return {
        ...state,
        investment: {
          ...state.investment,
          files: newFiles,
        }
      }
    case 'DELETE_INVESTMENT_FILE':
      let newFiles2 = Object.assign([], state.investment.files)
      console.log(action.payload)
      console.log(newFiles2)
      newFiles2.splice(action.payload, 1)
      return {
        ...state,
        investment: {
          ...state.investment,
          files: newFiles2,
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

