import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from '../constants/constants'

import {serverUrl, token} from '../../../../env'
import 'whatwg-fetch'

const fetchEventsRequest = () => {
  return {
    type: FETCH_EVENTS_REQUEST
  }
}

const fetchEventsSuccess = events => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events
})

const fetchEventsFailure = err => ({
  type: FETCH_EVENTS_FAILURE,
  payload: err
})

const fetchEvents = eventId => {
  const fetch = window.fetch
  const urlToFetch = eventId ? `${serverUrl}/events/${eventId}` : `${serverUrl}/events`

  return (dispatch, getState) => {
    // indicate that we are going to lunch the login request
    dispatch(fetchEventsRequest())
    // launch the login request
    return fetch(urlToFetch, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'APIKey': token
      }
    })
      // receive and parse the data
      .then((resp) => {
        if (resp.status && resp.status !== 200) throw resp.json()
        else return resp.json()
      })
      .then((resp) => {
        // process the response
        dispatch(fetchEventsSuccess(resp))
      })
      .catch((err) => {
        // @todo implement
        dispatch(fetchEventsFailure(err))
      })
  }
}

const dashboardActions = {
  fetchEvents
}

export default dashboardActions
