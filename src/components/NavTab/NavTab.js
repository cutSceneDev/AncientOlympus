import React from 'react'
import styles from './NavTab.css'

const NavTab = (props) => {
  return (
    <div className={styles.NavTab} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default NavTab