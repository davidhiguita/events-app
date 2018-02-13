import React, { Component } from 'react'
// material ui stuff
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = {
  chip: {
    'color': '#949EA8',
    'backgroundColor': '#D9DCE1'
  },
  button: {
    'background-color': '#5ac296',
    'font-size': 10,
    'color': '#fff',
    'width': 240,
    'height': 57
  },
  rootLabel: {
    color: '#D8D8D8'
  }
}

class DashboardEventNewForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      capacity: ''
    }
    this.onClickCreateEventBtn = this.onClickCreateEventBtn.bind(this)
  }

  handleInputChange (inputName, event) {
    this.setState({ [inputName]: event.target.value })
  }

  onClickCreateEventBtn () {
    const { createEvent } = this.props
    createEvent(this.state)
  }

  render () {
    const { classes } = this.props
    return (
      <div className='dasboard-event-new__form'>

        <div className='dasboard-event-new__form-title'>
          <h1>Create new event</h1>
          <span>Enter details below</span>
        </div>

        <div className='dasboard-event-new__form-fields'>
          <div className='dasboard-event-new__form-input'>
            <FormControl
              fullWidth
              margin='normal'
              required
              >
              <InputLabel classes={{root: classes.rootLabel}}>
                Title
              </InputLabel>
              <Input
                value={this.state.title}
                onChange={event => this.handleInputChange('title', event)}
                />
            </FormControl>
          </div>

          <div className='dasboard-event-new__form-input'>
            <FormControl
              fullWidth
              margin='normal'
              required
              >
              <InputLabel classes={{root: classes.rootLabel}}>
                Description
              </InputLabel>
              <Input
                value={this.state.description}
                onChange={event => this.handleInputChange('description', event)}
                />
            </FormControl>
          </div>

          <div className='dasboard-event-new__form-input'>
            <FormControl
              fullWidth
              margin='normal'
              required
              >
              <InputLabel classes={{root: classes.rootLabel}}>
                Date
              </InputLabel>
              <Input
                value={this.state.date}
                onChange={event => this.handleInputChange('date', event)}
                />
            </FormControl>
          </div>

          <div className='dasboard-event-new__form-input'>
            <FormControl
              fullWidth
              margin='normal'
              required
              >
              <InputLabel classes={{root: classes.rootLabel}}>
                Time
              </InputLabel>
              <Input
                value={this.state.time}
                onChange={event => this.handleInputChange('time', event)}
                />
            </FormControl>
          </div>

          <div className='dasboard-event-new__form-input'>
            <FormControl
              fullWidth
              margin='normal'
              required
              >
              <InputLabel classes={{root: classes.rootLabel}}>
                Capacity
              </InputLabel>
              <Input
                value={this.state.capacity}
                onChange={event => this.handleInputChange('capacity', event)}
                />
            </FormControl>
          </div>

          <div className='dasboard-event-new__submit-btn'>
            <Button variant='raised' className={classes.button} onClick={this.onClickCreateEventBtn}>
              CREATE NEW EVENT
            </Button>
          </div>
        </div>

      </div>
    )
  }
}

export default withStyles(styles)(DashboardEventNewForm)
