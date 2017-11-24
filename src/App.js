import React, { Component } from 'react'
import styles from './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

import Game from './containers/Game/Game'
import Intro from './containers/Intro/Intro'

class App extends Component {
  state = {
    user: {
      userName: '',
      isLogged: false
    }
  }

  logInUser = (userName) => {
    if (typeof userName !== 'string' || userName.length < 1) return
    const user = {...this.state.user}
    user.isLogged = true
    user.userName = userName
    
    this.setState({ user })
  }

  render() {
    return (
      <Router>
        <div className={styles.App}>
          {this.state.user.isLogged ? 
            <Game userName={this.state.userName} /> :
            <Intro logInUser={this.logInUser} />
          }
        </div>
      </Router>
    );
  }
}

export default App
