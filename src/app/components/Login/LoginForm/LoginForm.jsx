import React, { Component } from 'react'
// material ui components
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { Link } from 'react-router-dom'
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import IconButton from 'material-ui/IconButton'
import Visibility from 'material-ui-icons/Visibility'
import VisibilityOff from 'material-ui-icons/VisibilityOff'

const styles = theme => ({
  textField: {
    width: 480
  },
  button: {
    'background-color': '#09E06F',
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
      password: '',
      showPassword: false
    }
    this.onClickSubmitBtn = this.onClickSubmitBtn.bind(this)
    this.buildFillingText = this.buildFillingText.bind(this)
    this.handleClickShowPasssword = this.handleClickShowPasssword.bind(this);
  }

  handleClickShowPasssword () {
    this.setState({ showPassword: !this.state.showPassword })
  }

  handleMouseDownPassword (event) {
    event.preventDefault()
  };

  handleChange (inputName, event) {
    this.setState({ [inputName]: event.target.value })
  }

  onClickSubmitBtn () {
    const { login } = this.props
    login({ 'email': this.state.email, 'password': this.state.password })
  }

  buildFillingText () {
    const { users: { error, errorMessage } } = this.props
    let componentToRender
    if (!error) {
      componentToRender = <div className='login-form__right-column-fill-in-text'>Enter your details below</div>
    } else {
      componentToRender = <div className='login-form__right-column-fill-in-text--red'>{errorMessage}</div>
    }
    return componentToRender
  }

  render () {
    const { classes, users: {error} } = this.props
    const fillInText = this.buildFillingText()

    return (
      <Grid container className='login-form' spacing={24}>
        <Grid item md={3} sm={1} className='login-form__left-column'>
          <div className='login-form__left-column-bg-gray'>
            <div className='login-form__left-column-text'>
              <div>"Great, kid Don't get cocky."</div>
              <div className='login-form__left-column-text--green'>-</div>
              <div>Han solo</div>
            </div>
          </div>
        </Grid>
        <Grid item md={9} sm={11} className='login-form__right-column'>
          <div>
            <div className='login-form__right-column-signup-text'>
              <Link to='/signUp'>Don't have account? SIGN UP </Link>
            </div>
            <div className='login-form__right-column-form-fields'>
              <form>

                <div>
                  <div>Sign in to Eventio.</div>
                  {fillInText}
                </div>

                <div>
                  <TextField
                    error={error}
                    id='email'
                    label='Email'
                    className={classes.textField}
                    defaultValue='Email'
                    value={this.state.email}
                    onChange={event => { this.handleChange('email', event) }}
                    margin='normal'
                  />
                </div>
                <div>
                  <FormControl className={classes.formControl} error={error} margin='normal'>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input
                      className={classes.textField}
                      id='adornment-password'
                      type={this.state.showPassword ? 'text' : 'password'}
                      value={this.state.password}
                      onChange={event => this.handleChange('password', event)}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={this.handleClickShowPasssword}
                            onMouseDown={event => this.handleMouseDownPassword(event)}
                          >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>

                <div className='login-form__right-column-submit-btn'>
                  <Button variant='raised' className={classes.button} onClick={this.onClickSubmitBtn}>SIGN IN</Button>
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
export default withStyles(styles)(LoginForm)
