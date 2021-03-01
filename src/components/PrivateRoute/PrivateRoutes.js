import React from 'react'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../Dashboard/Dashboard'
import Addfunds from '../Add funds/Addfunds'
import Airtime from '../Airtime/Airtime'
import LandingPage from '../LandingPage/LandingPage'

const PrivateRoutes = () => {
  return (
    <>
      <PrivateRoute exact path="/user/" component={LandingPage} />
      <PrivateRoute exact path="/Dashboard" component={Dashboard} />
      <PrivateRoute exact path="/Addfunds" component={Addfunds} />
      <PrivateRoute exact path="/Contact" component={Dashboard} />
      <PrivateRoute exact path="/Airtime" component={Airtime} />
    </>
  )
}

export default PrivateRoutes
