import React, { Component } from 'react'

import Login from './Login/Login'
import Reg from './Reg/Reg'
import Modal from '../../../components/UI/Modal/Modal'

class Auth extends Component {
  state = {
    loginIsActive: true
  }

  handleActiveLogin = () => ( 
    this.setState({loginIsActive: true})
  )

  handleActiveReg = () => ( 
    this.setState({loginIsActive: false})
  )

  render() {
    return (
      <Modal 
        isActive={this.props.authIsActive} 
        onCloseClick={this.props.onCloseAuth}
      >
        {this.state.loginIsActive ? 
          <Login onToggleAuth={this.handleActiveReg} /> :
          <Reg onToggleAuth={this.handleActiveLogin} />
        }
      </Modal>
    )
  }
}

export default Auth