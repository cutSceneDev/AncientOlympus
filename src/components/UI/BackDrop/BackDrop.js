import React from 'react'
import styles from './BackDrop.css'

const backDrop = props => {
  return (
    <div
      className={styles.BackDrop}
      onClick={props.onCloseClick}
    />
  )
}

export default backDrop