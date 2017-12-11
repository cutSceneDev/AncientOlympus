import React, { Component } from 'react'
import styles from './UserBar.css'

import { logoutUserAsync } from '../../../store/actions/index'
import { connect } from 'react-redux'
import NavTab from '../../../components/NavTab/NavTab'
import UserInterface from './UserInterface/UserInterface'
import UserStats from './UserStats/UserStats'
import UserAbilities from './UserAbilities/UserAbilities'

class UserBar extends Component {
  state = {
    
  }
  
  render() {
    
    
    return (
      <div className={styles.UserBar}>
        <div className={styles.Nav}>
          <NavTab>
            {this.props.userEmail || 'Your email adress'}
          </NavTab>
          <NavTab onClick={this.props.onLogoutUser}>
            <span>Logout</span>
          </NavTab>         
        </div>
        <div className={styles.Content}>
          UserBaR comp here
          <UserInterface />
          <UserStats />
          <UserAbilities />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userEmail: state.login.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutUser: () => dispatch( logoutUserAsync() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)