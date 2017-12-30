import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUserAsync, logoutUserAsync } from './store/actions/index'
import Game from './containers/Game/Game'
import Intro from './containers/Intro/Intro'
import Spinner from './components/Spinner/Spinner'
import MapFirebaseLoginToRedux from './firebase/mapFirebaseLoginToRedux'

class App extends Component {
  render() {
    const { onLoginUserAsync, onLogoutUserAsync, userIsLogged } = this.props
    return (
      <div>
        
        {/*  DEV */}
        <div>
          <button onClick={onLoginUserAsync}>login</button>
          <button onClick={onLogoutUserAsync}>logout</button>
        </div>    
        {/*  DEV */}

        <MapFirebaseLoginToRedux />
        <Spinner />
        {userIsLogged ? (
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserAsync: () => dispatch( loginUserAsync('Artyr@gmail.com', 'password') ),
    onLogoutUserAsync: () => dispatch( logoutUserAsync() )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))