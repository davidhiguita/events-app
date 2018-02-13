// react stuff
import React, { Component } from 'react'
// redux stuff
import { connect } from 'react-redux'
import dashboardActions from 'reduxConfig/actions/dashboard'
// material ui stuff
import Grid from 'material-ui/Grid'
// components
import DashboardEventNewForm from 'components/Dashboard/DashboardEventNew/DashboardEventNewForm/dashboard.event.new.form'

class DashboardEventNew extends Component {
  render () {
    return (
      <Grid container className='dasboard-event-new' spacing={24}>
        <Grid item md={12} sm={12} xs={12}>
          <div className='dasboard-event-new__container'>
            <DashboardEventNewForm {...this.props} />
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
    createEvent: dashboardActions.createEvent
  }
)(DashboardEventNew)
