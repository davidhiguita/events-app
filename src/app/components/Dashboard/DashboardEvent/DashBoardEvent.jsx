import React from 'react'
/* Material ui stuff */
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = {
  button: {
    'fontSize': 14,
    'height': 32,
    'color': '#A9AEB4',
    'backgroundColor': '#D9DCE1'
  }
}

const DashboardEvent = props => {
  const {classes} = props
  return (
    <div className='dashboard-event'>
      <div className='dashboard-event__time'>April 4, 2017 - 2:17 PM</div>
      <div className='dashboard-event__title'>How to get angry</div>
      <div className='dashboard-event__sub-title'>Tom Watts</div>
      <div className='dashboard-event__content'>
        I will show you how to get angry in a second
      </div>
      <div className='dashboard-event__footer'>
        <div className='dashboard-event__footer-counter'>9 of 31</div>
        <div className='dashboard-event__footer-btn'>
          <Button variant='raised' className={classes.button} onClick={() => {}}>EDIT</Button>
        </div>
      </div>
    </div>
  )
}

// bind component to the store
export default withStyles(styles)(DashboardEvent)
