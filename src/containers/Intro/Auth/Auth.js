import React, { Component } from 'react'

import Login from './Login/Login'
import Register from './Register/Register'
import Modal from '../../../components/UI/Modal/Modal'

class Auth extends Component {
  state = {
    logIsActive: true
  }

  handleToggleLogin = () => ( 
    this.setState(prevState => ({
      logIsActive: !prevState.logIsActive
    }))
  )

  render() {
    return (
      <Modal 
        isActive={this.props.isActive} 
        onCloseClick={this.props.onToggleAuth}
      >
        {this.state.logIsActive ? 
          <Login onToggleAuth={this.handleToggleLogin} /> :
          <Register onToggleAuth={this.handleToggleLogin} />
        }
      </Modal>
    )
  }
}

export default Auth