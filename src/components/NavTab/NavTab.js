import React from 'react'
import styles from './NavTab.css'

const NavTab = (props) => {
  const { active, onClick } = props
  
  return (
    <div className={[styles.NavTab, active ? styles.Active : styles.Tab].join(' ')} onClick={onClick}>
      {props.children}
    </div>
  )
}

export default NavTab