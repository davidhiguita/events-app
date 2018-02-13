// react stuff
import React, {Component} from 'react'
// redux stuff
import { connect } from 'react-redux'
import dashboardActions from 'reduxConfig/actions/dashboard'
// components
import AttendeeCircle from 'components/Dashboard/DashboardEventDetail/AttendeeCircle/attendee.circle'
import DashBoardEventEditForm from 'components/Dashboard/dashboard.event.edit/dashboard.event.edit.form/dashboard.event.edit.form'

class DashboardEventEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      capacity: '',
      id: ''
    }

    this.buildAttendeesContent = this.buildAttendeesContent.bind(this)
    this.buildContent = this.buildContent.bind(this)
  }

  componentDidMount () {
    const { match: {params: {id}}, fetchEvents } = this.props
    fetchEvents(id)
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

  parseDateAndTimeInfo (eventDetail) {
    if (eventDetail && eventDetail.startsAt) {
      let dateObj = new Date(eventDetail.startsAt)
      let dateText = dateObj.toString()
      let dateTextAsArray = dateText.split(' ')
      let finalDate = `${dateTextAsArray[1]} ${dateTextAsArray[2]}, ${dateTextAsArray[3]}`
      let finalTime = `${dateTextAsArray[4]}`
      return { date: finalDate, time: finalTime }
    } else {
      return { date: '', time: '' }
    }
  }

  getEventInfoReady () {
    const { events: { eventList: eventInfo } } = this.props

    // check if we have eventInfo
    const dateAndTime = this.parseDateAndTimeInfo(eventInfo)
    return {
      date: dateAndTime['date'],
      time: dateAndTime['time'],
      title: eventInfo.title ? eventInfo.title : '',
      description: eventInfo.description ? eventInfo.description : '',
      capacity: eventInfo.capacity ? eventInfo.capacity : '',
      id: eventInfo['_id'] ? eventInfo['_id'] : ''
    }
  }

  buildContent () {
    const attendees = this.buildAttendeesContent()
    const defaultEventInfo = this.getEventInfoReady()
    return (
      <DashBoardEventEditForm
        defaultEventInfo={defaultEventInfo}
        attendees={attendees}
      />
    )
  }

  render () {
    return this.buildContent()
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
    editEvent: dashboardActions.editEvent,
    fetchEvents: dashboardActions.fetchEvents
  }
)(DashboardEventEdit)