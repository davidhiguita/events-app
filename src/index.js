// import react dependencies
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'

// Redux stuff
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {createBrowserHistory} from 'history'
import { routerReducer, routerMiddleware } from 'react-router-redux'
// main app component
import Login from 'components/Login/Login'
import SignUp from 'components/SignUp/signup'
import Dashboard from 'components/Dashboard/dashboard'
import DashboardEventDetail from 'components/Dashboard/DashboardEventDetail/dashboard.event.detail'
import DashboardEventNew from 'components/Dashboard/DashboardEventNew/dashboard.event.new'
import DashboardEventEdit from 'components/Dashboard/dashboard.event.edit/dashboard.event.edit'

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

const history = createBrowserHistory()

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

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/event-detail/:id' component={DashboardEventDetail} />
        <Route path='/event-new/' component={DashboardEventNew} />
        <Route path='/event-edit/:id' component={DashboardEventEdit} />
      </div>
    )
  }
}

const MyApp = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  )
}

// render our App componnet and mount it to our #root element
ReactDOM.render(<MyApp />, document.getElementById('root'))
