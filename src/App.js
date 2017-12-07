import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from './firebase/firebase'
import Game from './containers/Game/Game'
import Intro from './containers/Intro/Intro'
import Spinner from './components/UI/Spinner/Spinner'
import MapFirebaseLoginToRedux from './firebase/mapFirebaseLoginToRedux'

class App extends Component {
  state = {
    user: ''
  }

  // DEV
  userLogin = () => {
    auth.signInWithEmailAndPassword('Artyr@gmail.com', 'password')
      .catch(error => {
        console.log(error.code, error.message)
      });
  }

  userLogout = () => {
    auth.signOut().catch(error => {
      console.log(error.code, error.message)
    });
  }
  // DEV

  render() {
    return (
      <div>
        <div>
          <button onClick={this.userLogin}>login</button>
          <button onClick={this.userLogout}>logout</button>
        </div>
        <MapFirebaseLoginToRedux />
        <Spinner />
        {this.props.userIsLogged ? (
          <Switch>
            <Route path={'/game'} component={Game} />
            <Route path={'*'} render={() => <Redirect to={'/game'} />} />
          </Switch> 
        ) : (
          <Switch>
            <Route path={'/intro'} component={Intro} />
            <Route path={'*'} render={() => <Redirect to={'/intro'} />} />
          </Switch>
       )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userIsLogged: state.login.isLogged
  }
}

export default withRouter(connect(mapStateToProps)(App))