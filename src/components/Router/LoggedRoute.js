import React from 'react'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropsRoute from './PropsRoute'

const loggedRoute = props => (
  props.isLogged ? (
    <PropsRoute {...props} />
  ) : (
    <Redirect to={'/intro'} />
  )
)

const mapStateToProps = state => ({
  isLogged: state.login.user.isLogged
})

export default connect(mapStateToProps)(loggedRoute)