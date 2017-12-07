import React, { Component } from 'react'
import styles from './UserBar.css'

import Interface from './Interface/Interface'
import Stats from './Stats/Stats'
import Abilities from './Abilities/Abilities'

class UserBar extends Component {
  state = {
    
  }
  
  render() {
    
    
    return (
      <div className={styles.UserBar}>
        UserBar
        <Interface />
        <Stats />
        <Abilities />
      </div>
    )
  }
}

export default UserBar