import React, { Component } from 'react'
// material ui components
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

require('./loginForm.scss')

const styles = theme => ({
  textField: {
    width: 480
  },
  button: {
    'background-color': '#00E170',
    'font-size': 10,
    'color': '#fff',
    'width': 169,
    'height': 37
  }
})

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onClickSubmitBtn = this.onClickSubmitBtn.bind(this)
  }

  handleChange (inputName, event) {
    this.setState({[inputName]: event.target.value})
  }

  onClickSubmitBtn () {
    const { props: {login} } = this.props
    login({'email': this.state.email, 'password': this.state.password})
  }

  render () {
    const { classes } = this.props

    return (
      <Grid container className='login-form' spacing={24}>
        <Grid item md={3} className='login-form__left-column'>
          <div className='login-form__left-column-bg-gray'>
            <div className='login-form__left-column-text'>
              <div>"Great, kid Don't get cocky."</div>
              <div className='login-form__left-column-text--green'>-</div>
              <div>Han solo</div>
            </div>
          </div>
        </Grid>
        <Grid item md={9} className='login-form__right-column'>
          <form>

            <div>
              <div>Sign in to Eventio.</div>
              <div>Enter your details below.</div>
            </div>

            <div>
              <TextField
                id='email'
                label='Email'
                className={classes.textField}
                defaultValue='Email'
                value={this.state.email}
                onChange={(event) => { this.handleChange('email', event) }}
                margin='normal'
              />
            </div>
            <div>
              <TextField
                id='name'
                label='Name'
                className={classes.textField}
                defaultValue='Password'
                value={this.state.password}
                onChange={(event) => this.handleChange('password', event)}
                margin='normal'
              />
            </div>

            <div className='login-form__right-column-submit-btn'>
              <Button variant='raised' className={classes.button} onClick={this.onClickSubmitBtn}>SIGN IN</Button>
            </div>

          </form>
        </Grid>
      </Grid>
    )
  }
}
// bind component to the store
export default withStyles(styles)(LoginForm)
