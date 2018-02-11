import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE

} from '../constants/constants'

const initialState = {
  isFecthing: false,
  error: false,
  errorMessage: '',
  eventList: [],
  success: false
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return Object.assign({}, state, {
        isFecthing: true, error: false, success: false, eventList: []
      })

    case FETCH_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        isFecthing: false, success: true, eventList: action.payload
      })

    case FETCH_EVENTS_FAILURE:
      return Object.assign({}, state, {
        isFecthing: false, error: true
      })

    default:
      return state
  }
}

export default eventsReducer
