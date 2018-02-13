import React, { Component } from 'react'
// material ui components
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { Link } from 'react-router-dom'
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
// util functions
import utils from 'utils/utils'

const styles = theme => ({
  button: {
    'background-color': '#09E06F',
    'font-size': 10,
    'color': '#fff',
    'width': 169,
    'height': 37
  },
  rootLabel: {
    color: '#D8D8D8'
  },
  rootInput: {
    width: 240
  }
})

class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.onClickSignUpBtn = this.onClickSignUpBtn.bind(this)
  }

  handleInputChange (inputName, event) {
    this.setState({ [inputName]: event.target.value })
  }

  onClickSignUpBtn () {
    const { signUp, signUpFailure } = this.props
    const fieldsValidation = utils.fieldsAreValid(this.state)
    if (fieldsValidation['valid']) {
      // dispatch this action to sign up a new user
      signUp({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
    } else {
      // dispatch this action to show up a validation message in the ui
      signUpFailure('All fields with * are required')
    }
  }

  buildFillingText () {
    const { users: { error, errorMessage, success, successMessage } } = this.props
    let componentToRender
    if (!error && !success) {
      componentToRender = <div className='login-form__right-column-fill-in-text'>Enter your details below</div>
    } else if (success && !error && successMessage !== '') {
      componentToRender = <div className='login-form__right-column-fill-in-text'>{successMessage}</div>
    } else {
      componentToRender = <div className='login-form__right-column-fill-in-text--red'>{errorMessage}</div>
    }
    return componentToRender
  }

  render () {
    const { classes } = this.props
    const fillInText = this.buildFillingText()

    return (
      <Grid container className='sign-up-form' spacing={24}>
        <Grid item md={3} className='sign-up-form__left-column'>
          <div className='login-form__left-column-bg-gray'>
            <div className='login-form__left-column-text'>
              <div>"Great, kid Don't get cocky."</div>
              <div className='login-form__left-column-text--green'>-</div>
              <div>Han solo</div>
            </div>
          </div>
        </Grid>
        <Grid item md={9} className='sign-up-form__right-column'>
          <div>
            <div className='sign-up-form__right-column-signin-text'>
              <Link to='/'>Already have an account? SIGN IN </Link>
            </div>
            <div className='sign-up-form__right-column-form-fields'>
              <form>

                <div>
                  <div>Get started absolutely free.</div>
                  {fillInText}
                </div>

                <div className='sign-up-form__right-column-input'>
                  <FormControl
                    fullWidth
                    margin='normal'
                    required
                    >
                    <InputLabel classes={{root: classes.rootLabel}}>
                      First name
                    </InputLabel>
                    <Input
                      value={this.state.firstName}
                      onChange={event => this.handleInputChange('firstName', event)}
                     />
                  </FormControl>
                </div>

                <div className='sign-up-form__right-column-input'>
                  <FormControl
                    className={classes.formControl}
                    fullWidth
                    margin='normal'
                    required
                  >
                    <InputLabel classes={{root: classes.rootLabel}}>
                      Last name
                    </InputLabel>
                    <Input
                      value={this.state.lastName}
                      onChange={event => this.handleInputChange('lastName', event)}
                     />
                  </FormControl>
                </div>

                <div className='sign-up-form__right-column-input'>
                  <FormControl className={classes.formControl} fullWidth margin='normal' required>
                    <InputLabel classes={{root: classes.rootLabel}}>
                      Email
                    </InputLabel>
                    <Input
                      value={this.state.email}
                      onChange={event => this.handleInputChange('email', event)}
                     />
                  </FormControl>
                </div>

                <div className='sign-up-form__right-column-input'>
                  <FormControl className={classes.formControl} fullWidth margin='normal' required>
                    <InputLabel classes={{root: classes.rootLabel}}>
                      Password
                    </InputLabel>
                    <Input
                      value={this.state.password}
                      onChange={event => this.handleInputChange('password', event)}
                     />
                  </FormControl>
                </div>

                <div className='sign-up-form__right-column-input'>
                  <FormControl className={classes.formControl} fullWidth margin='normal'>
                    <InputLabel classes={{root: classes.rootLabel}}>
                      Repeat password
                    </InputLabel>
                    <Input
                      value={this.state.repeatedPassword}
                      onChange={event => this.handleInputChange('repeatedPassword', event)}
                     />
                  </FormControl>
                </div>

                <div className='login-form__right-column-submit-btn'>
                  <Button variant='raised' className={classes.button} onClick={this.onClickSignUpBtn}>SIGN UP</Button>
                </div>

              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    )
  }
}
// bind component to the store
export default withStyles(styles)(SignUpForm)
