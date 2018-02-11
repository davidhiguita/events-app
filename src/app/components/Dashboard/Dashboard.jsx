import React, { Component } from 'react'
// redux stuff
import { connect } from 'react-redux'
import dashboardActions from 'reduxConfig/actions/login'
// material ui
import Grid from 'material-ui/Grid'
// components
import DashboardEvent from 'components/Dashboard/DashboardEvent/DashboardEvent'

class Dashboard extends Component {
  render () {
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
              <DashboardEvent />
              <DashboardEvent />
              <DashboardEvent />
              <DashboardEvent />
              <DashboardEvent />
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
    users: state.users
  }),
  // map actions
  {
    fetchEvents: dashboardActions.fetchEvents
  }
)(Dashboard)
