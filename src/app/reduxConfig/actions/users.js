import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/constants'

import {serverUrl, token} from '../../../../env'

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

const loginFailure = () => ({
  type: LOGIN_FAILURE
})

const login = (userCredentials) => {
  console.log('userCredentials', userCredentials)
  return (dispatch, getState) => {
    // indicate that we are going to lunch the login request
    dispatch(loginRequest())
    // launch the login request
    return fetch(`${serverUrl}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({
        'email': userCredentials.email,
        'password': userCredentials.password
      })
    })
      // receive and parse the data
      .then((resp) => {
        return resp.json()
      })
      .then((resp) => {
        // process the response
        dispatch(loginSuccess(resp))
      })
      .catch((err) => {
        dispatch(loginFailure(err))
      })
  }
}

const userActions = {
  login
}

export default userActions
