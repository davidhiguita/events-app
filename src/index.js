// import react dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Redux stuff
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
// main app component
import Login from 'components/Login/Login'
import SignUp from 'components/SignUp/SignUp'
import Dashboard from 'components/Dashboard/Dashboard'
import DashboardEventDetail from 'components/Dashboard/DashboardEventDetail/DashboardEventDetail'

import thunkMiddleware from 'redux-thunk'

// import reducers
import usersReducer from 'reduxConfig/reducers/users'
import eventsReducer from 'reduxConfig/reducers/events'

// import general styles
require('./assets/stylesheets/styles.scss')

const mainReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  routing: routerReducer
})

const history = createHistory()

const store = createStore(
  mainReducer,
  undefined,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
const MyApp = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <div>
            <Route exact path='/' component={Login} />
            <Route exact path='/signUp' component={SignUp} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/event-detail/:id' component={DashboardEventDetail} />
          </div>
        </Router>
      </ConnectedRouter>
    </Provider>
  )
}

// render our App componnet and mount it to our #root element
ReactDOM.render(<MyApp />, document.getElementById('root'))
