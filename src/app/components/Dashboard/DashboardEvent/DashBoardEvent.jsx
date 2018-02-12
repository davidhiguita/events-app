import React, {Component} from 'react'
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

class DashboardEvent extends Component {
  constructor (props) {
    super(props)
    this.redirectToDetail = this.redirectToDetail.bind(this)
  }

  redirectToDetail () {
    const {redirect, history, eventInfo} = this.props
    if (redirect && history) {
      history.push(`/event-detail/${eventInfo.id}`)
    }
  }

  render () {
    const {classes, eventInfo} = this.props

    return (
      <div className='dashboard-event'>
        <div className='dashboard-event__content' onClick={this.redirectToDetail}>
          <div className='dashboard-event__time'>{ eventInfo && eventInfo.startsAt ? eventInfo.startsAt : ''}</div>
          <div className='dashboard-event__title'>{ eventInfo && eventInfo.title ? eventInfo.title : ''}</div>
          <div className='dashboard-event__sub-title'>{ eventInfo && eventInfo.owner ? `${eventInfo.owner.firstName} ${eventInfo.owner.lastName} ` : ''}</div>
          <div className='dashboard-event__description'>
            {eventInfo && eventInfo.description ? eventInfo.description : '' }
          </div>
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
}

// bind component to the store
export default withStyles(styles)(DashboardEvent)
