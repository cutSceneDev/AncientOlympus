import React, { Component } from 'react'
import styles from './App.css'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'

import Game from './containers/Game/Game'
import Intro from './containers/Intro/Intro'
import Spinner from './components/UI/Spinner/Spinner'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Spinner />
        {!this.props.isLogged ? ([
          <Route path="/intro" render={() => <Intro />} />,
          <Route path="*" render={() => <Redirect to="/intro" /> } />
        ]) : (
        <Switch>
          <Route path="/game" render={() => <Game />} />
          <Route path="*" render={() => <Redirect to="/game" /> } />
        </Switch>
         )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.login.user.isLogged,
    userName: state.login.user.userName
  }
}

export default withRouter(connect(mapStateToProps)(App))

