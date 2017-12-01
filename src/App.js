import React, { Component } from 'react'
import styles from './App.css'

import { Switch } from 'react-router-dom'
import PropsRoute from './components/Router/PropsRoute'
import LoggedRoute from './components/Router/LoggedRoute'

import Game from './containers/Game/Game'
import Intro from './containers/Intro/Intro'
import Spinner from './components/UI/Spinner/Spinner'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Spinner />
        <Switch>
          <PropsRoute exact path={'/intro'} component={Intro} />
          <LoggedRoute path={'*'} component={Game} />
        </Switch>
      </div>
    );
  }
}

export default App

