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
import Login from 'components/Login/Login.jsx'
import SignUp from 'components/SignUp/SignUp.jsx'
import thunkMiddleware from 'redux-thunk'

// import reducers
import usersReducer from 'reduxConfig/reducers/users'

// import general styles
require('./assets/stylesheets/styles.scss')

const mainReducer = combineReducers({
  users: usersReducer,
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
          </div>
        </Router>
      </ConnectedRouter>
    </Provider>
  )
}

// render our App componnet and mount it to our #root element
ReactDOM.render(<MyApp />, document.getElementById('root'))
