import React, {Component} from 'react'
// redux stuff
import { connect } from 'react-redux'
import dashboardActions from 'reduxConfig/actions/dashboard'
// material ui
import Grid from 'material-ui/Grid'
// components
import DashboardEvent from 'components/Dashboard/DashboardEvent/DashboardEvent'

class DashboardEventDetail extends Component {
  constructor (props) {
    super(props)
    this.buildEventDetail = this.buildEventDetail.bind(this)
  }

  componentDidMount () {
    const { match: {params: {id}} } = this.props
    this.props.fetchEvents(id)
  }

  buildEventDetail () {
    const { events: {eventList} } = this.props

    if (eventList) {
      return <DashboardEvent eventInfo={eventList} />
    } else {
      return null
    }
  }

  render () {
    const { events: {eventList: eventDetail} } = this.props
    // const eventDetailComp = this.buildEventDetail()
    console.log('props in event detail', this.props)
    return (
      <Grid container className='dashboard-event-detail' spacing={24}>
        <Grid item md={12} sm={12} xs={12}>
          <div className='dashboard-event-detail__container'>
            <div className='dashboard-event-detail__event-number'>
              Detail Event: # { eventDetail ? eventDetail['_id'] : '' }
            </div>
            <div className='dashboard-event-detail__columns'>
              <DashboardEvent eventInfo={eventDetail} />
              <div className='dashboard-event-detail__attendees'>
                right column here
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
