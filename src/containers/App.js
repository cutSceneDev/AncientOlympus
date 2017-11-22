import React, { Component } from 'react'
import styles from './App.css'

import Game from './Game/Game'
import Intro from './Intro/Intro'

class App extends Component {
  state = {
    user: {
      loginName: '',
      accessGranted: false
    }
  }

  userLoged = (name) => {
    if (typeof name !== 'string' || name.length < 1) return
    const user = {...this.state.user}
    user.accessGranted = true
    user.loginName = name
    
    this.setState({ user })
  }

  render() {
    return (
      <div className={styles.App}>
        {this.state.user.accessGranted ? 
          <Game loginName={this.state.loginName} /> :
          <Intro userLoged={this.userLoged} />
        }
      </div>
    );
  }
}

export default App
