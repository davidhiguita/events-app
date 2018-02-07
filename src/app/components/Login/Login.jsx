import React, { Component } from 'react'
// redux stuff
import { connect } from 'react-redux'
import userActions from 'reduxConfig/actions/users'
import LoginForm from './LoginForm/LoginForm'

class Login extends Component {
  render () {
    return (
      <div className='container'>
        <LoginForm props={this.props} />
      </div>
    )
  }
}
// bind component to the store
export default connect(
  // map props
  state => ({
    users: state.users
  }),
  // map actions
  {
    login: userActions.login
  }
)(Login)
