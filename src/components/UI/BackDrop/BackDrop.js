import React from 'react'
import styles from './BackDrop.css'

const backDrop = props => {
  return (
    <div
      className={styles.BackDrop}
      onClick={props.onCloseClick}
      style={{zIndex: props.zIndex ? props.zIndex : 100}}
    />
  )
}

export default backDrop