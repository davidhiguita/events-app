import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../constants/constants'

const initialState = {
  isFecthing: false,
  error: '',
  users: [],
  success: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {isFecthing: true, error: ''})
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {isFecthing: false, success: true})

    default:
      return state
  }
}

export default usersReducer
