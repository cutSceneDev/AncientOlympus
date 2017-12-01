import React from 'react'

import { Route } from 'react-router-dom'

const propsRoute = ({component: Component, ...props}) => (
  <Route {...props} component={Component} />
)

export default propsRoute