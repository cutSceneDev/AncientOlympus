import React, { Component } from 'react'
import styles from './Game.css'

import UserBar from './UserBar/UserBar'
import Locations from './Locations/Locations'

class Board extends Component {
  state = {

  }

  render() {

    return(
      <div className={styles.Game}>
        <UserBar />
        <Locations />
      </div>
    )
  }
}

export default Board