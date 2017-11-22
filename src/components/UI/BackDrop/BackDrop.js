import React from 'react'
import styles from './BackDrop.css'

const backDrop = (props) => {
  return (
    <div
      className={styles.BackDrop}
      onClick={props.click}
      style={{
        opacity: props.active ? 1 : 0,
        zIndex: props.active ? 100 : -100
      }}
    />
  )
}

export default backDrop