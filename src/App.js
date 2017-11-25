import React, { Component } from 'react'
import styles from './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux'

import Game from './containers/Game/Game'
import Intro from './containers/Intro/Intro'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          {this.props.isLogged ? 
            <Game /> :
            <Intro />
          }
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.user.isLogged,
    userName: state.user.userName
  }
}

export default connect(mapStateToProps)(App)

