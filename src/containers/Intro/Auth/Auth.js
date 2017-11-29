import React, { Component } from 'react'

import Login from './Login/Login'
import Register from './Register/Register'
import Modal from '../../../components/UI/Modal/Modal'


class Auth extends Component {
  state = {
    logIsActive: true,
    regIsActive: false
  }

  handleRegOpenClick = () => {
    this.setState({
      logIsActive: false,
      regIsActive: true
    })
  }

  handleLogOpenClick = () => {
    this.setState({
      logIsActive: true,
      regIsActive: false
    })
  }

  render() {
    return (
      <Modal 
        isActive={this.props.isActive} 
        onCloseClick={this.props.onCloseClick}
      >
        {this.state.logIsActive && <Login onRegOpenClick={this.handleRegOpenClick} />}
        {this.state.regIsActive && <Register onLogOpenClick={this.handleLogOpenClick} />}
      </Modal>
    )
  }
}

export default Auth