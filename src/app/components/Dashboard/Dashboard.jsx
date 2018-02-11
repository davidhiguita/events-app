import React, { Component } from 'react'
// redux stuff
import { connect } from 'react-redux'
import dashboardActions from 'reduxConfig/actions/dashboard'
// material ui
import Grid from 'material-ui/Grid'
// components
import DashboardEvent from 'components/Dashboard/DashboardEvent/DashboardEvent'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.buildEvents = this.buildEvents.bind(this)
  }
  componentDidMount () {
    this.props.fetchEvents()
  }

  buildEvents () {
    const {events: {eventList}} = this.props
    console.log('events ', eventList)
    if ( eventList.length) {
      return eventList.map(event => <DashboardEvent eventInfo={event} />)
    } else {
      return []
    }
  }

  render () {
    const events = this.buildEvents()
    return (
      <Grid container className='dashboard' spacing={24}>
        <Grid item md={12} sm={12} xs={12}>
          <div className='dashboard__container'>
            <div className='dashboard__user-bar'>Tom Watts title</div>
            <div className='dashboard__menu'>
              <ul className='dashboard__menu-list'>
                <li> ALL EVENTS</li>
                <li> FUTURE EVENTS</li>
                <li> PAST EVENTS</li>
              </ul>
              <div className='dashboard__menu-icons'>
                <div>icon1</div>
                <div>icon2</div>
              </div>
            </div>
            <div className='dashboard__events'>
              {events}
            </div>
          </div>
        </Grid>
      </Grid>
    )
  }
}
// bind component to the store
export default connect(
  // map props
  state => ({
    events: state.events
  }),
  // map actions
  {
    fetchEvents: dashboardActions.fetchEvents
  }
)(Dashboard)
