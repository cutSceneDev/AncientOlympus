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
    const { authIsActive, onCloseAuth } = this.props
    return (
      <Modal 
        isActive={authIsActive} 
        onCloseClick={() => {onCloseAuth(); this.handleActiveLogin()}}
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