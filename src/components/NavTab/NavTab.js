import React from 'react'
import styles from './NavTab.css'

const NavTab = (props) => {
  return (
    <div className={[styles.NavTab, props.active ? styles.Active : styles.Tab].join(' ')} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default NavTab