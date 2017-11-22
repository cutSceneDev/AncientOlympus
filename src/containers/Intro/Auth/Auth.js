import React, { Component } from 'react'
import styles from './Auth.css'

import Login from './Login/Login'
import Register from './Register/Register'
import Modal from '../../../components/UI/Modal/Modal'


class Auth extends Component {
  state = {
    regActive: false
  }

  regActivate = () => {
    this.setState({regActive: true})
  }

  regDeActivate = () => {
    this.setState({regActive: false})
  }


  render() {
    const login = (
      <Modal active={this.props.active} click={this.props.click}>
        <Login
          regActivate={this.regActivate}
          userLoged={this.props.userLoged}
        />
      </Modal>
    )

    const register = (
      <Modal active={this.props.active} click={this.props.click}>
        <Register 
          regDeActivate={this.regDeActivate}
        />
      </Modal>
    )

    return (
      <div className={styles.Auth}>
        {this.state.regActive ? register : login}
      </div>
    )
  }
}

export default Auth