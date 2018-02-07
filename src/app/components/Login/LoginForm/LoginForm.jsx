import React, { Component } from 'react'
// material ui components
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import starWars from 'images/starWars.png'
import Grid from 'material-ui/Grid'

require('./loginForm.scss')

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  handleChange (inputName, event) {
    console.log('event ', event.target.value)
    this.setState({[inputName]: event.target.value})
  }

  render () {
    const {classes} = this.props

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
              <TextField
                id='user'
                label='User'
                className={classes.textField}
                defaultValue='User'
                value={this.state.user}
                onChange={(event) => { this.handleChange('user', event) }}
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
            <div className='submit-btn'>
              <Button variant='raised' color='primary'>Hello World</Button>
            </div>
          </form>
        </Grid>
      </Grid>
    )
  }
}
// bind component to the store
export default withStyles(styles)(LoginForm)
