import React from 'react'
import styles from './BackDrop.css'

const backDrop = props => {
  return (
    <div
      className={styles.BackDrop}
      onClick={props.onClick}
      style={{
        opacity: props.isActive ? 1 : 0,
        zIndex: props.isActive ? props.zIndex || 100 : -100
      }}
    />
  )
}

export default backDrop