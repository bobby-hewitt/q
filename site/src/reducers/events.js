
const initialState = {
  events: null,
  event: {
      name: '',
      date: '',
      time: '',
      description: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      postcode: '',
      latlng: '',
  }
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload
      }
    case 'SET_EVENT':
      return {
        ...state,
        event: action.payload
      }
    case 'EDIT_EVENT_INPUT_VALUE':
      return {
        ...state,
        event : {
          ...state.event,
          [action.payload.target]: action.payload.value
        }
       
      }
      case 'REMOVE_EVENT_FROM_STATE':
      return {
        ...state,
        event : {
          name: '',
          date: '',
          time: '',
          description: '',
          addressLine1: '',
          addressLine2: '',
          addressLine3: '',
          postcode: '',
          latlng: '',
        }
       
      }
    default:
      return state
  }
}

