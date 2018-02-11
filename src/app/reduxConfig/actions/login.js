import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/constants'

import {serverUrl, token} from '../../../../env'
import 'whatwg-fetch'

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

const loginFailure = err => ({
  type: LOGIN_FAILURE,
  payload: err
})

const login = userCredentials => {
  const fetch = window.fetch

  return (dispatch, getState) => {
    // indicate that we are going to lunch the login request
    dispatch(loginRequest())
    // launch the login request
    return fetch(`${serverUrl}/auth/native`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'APIKey': token
      },
      body: JSON.stringify({
        'email': userCredentials.email,
        'password': userCredentials.password
      })
    })
      // receive and parse the data
      .then((resp) => {
        if (resp.status && resp.status !== 200) throw resp.json()
        else return resp.json()
      })
      .then((resp) => {
        // process the response
        dispatch(loginSuccess(resp))
      })
      .catch((resp) => {
        resp.then(result => {
          let errMessage
          if (result.error === 'User.InvalidPassword') {
            errMessage = 'Oops! That email and password combination is not valid.'
          } else {
            errMessage = 'Something were wrong :('
          }
          dispatch(loginFailure(errMessage))
        })
      })
  }
}

const loginActions = {
  login
}

export default loginActions
