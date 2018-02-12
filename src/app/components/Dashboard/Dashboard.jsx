import React, { Component } from 'react'
// redux stuff
import { connect } from 'react-redux'
import dashboardActions from 'reduxConfig/actions/dashboard'
// material ui
import Grid from 'material-ui/Grid'
// components
import DashboardEvent from 'components/Dashboard/DashboardEvent/DashboardEvent'
import AddEventIcon from 'components/AddEventIcon/AddEventIcon'

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
    if (eventList.length) {
      return eventList.map((event, index) => {
        return (
          <DashboardEvent
            history={this.props.history}
            key={index} eventInfo={event}
            redirect
            />
        )
      })
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
            <div className='dashboard__events-footer'>
              <AddEventIcon />
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
