import React, {Component} from 'react'
// redux stuff
import { connect } from 'react-redux'
import dashboardActions from 'reduxConfig/actions/dashboard'
// material ui
import Grid from 'material-ui/Grid'

// components
import DashboardEvent from 'components/Dashboard/DashboardEvent/DashboardEvent'
import ProfileIcon from 'components/ProfileIcon/ProfileIcon'
import AttendeeCircle from 'components/Dashboard/DashboardEventDetail/AttendeeCircle/AttendeeCircle'

class DashboardEventDetail extends Component {
  constructor (props) {
    super(props)
    this.buildAttendeesContent = this.buildAttendeesContent.bind(this)
  }
  componentDidMount () {
    const { match: {params: {id}} } = this.props
    this.props.fetchEvents(id)
  }

  buildAttendeesContent () {
    const { events: {eventList: eventDetail} } = this.props

    if (eventDetail && eventDetail.attendees && eventDetail.attendees.length) {
      return eventDetail.attendees.map((attendee, index) => {
        return (
          <div key={index} className='dashboard-event-detail__attendees-item'>
            <AttendeeCircle labelText={`${attendee.firstName} ${attendee.lastName}`} />
          </div>
        )
      })
    } else {
      return null
    }
  }

  render () {
    const { events: {eventList: eventDetail} } = this.props
    const attendees = this.buildAttendeesContent()
    return (
      <Grid container className='dashboard-event-detail' spacing={24}>
        <Grid item md={12} sm={12} xs={12}>
          <div className='dashboard-event-detail__container'>
            <div className='dashboard-event-detail__top-bar'>
              <div className='dashboard-event-detail__top-bar-title'> Back to events</div>
              <ProfileIcon />
            </div>
            <div className='dashboard-event-detail__event-number'>
              Detail Event: # { eventDetail ? eventDetail['_id'] : '' }
            </div>
            <div className='dashboard-event-detail__columns'>
              <DashboardEvent eventInfo={eventDetail} />
              <div className='dashboard-event-detail__attendees'>
                <div className='dashboard-event-detail__attendees-title'>
                  Attendees
                </div>
                <div className='dashboard-event-detail__attendees-items'>
                  {attendees}
                </div>
              </div>
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
)(DashboardEventDetail)
