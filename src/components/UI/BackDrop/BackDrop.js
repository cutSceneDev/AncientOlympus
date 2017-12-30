import React from 'react'
import styles from './BackDrop.css'

const Backdrop = (props) => {
  const { onCloseClick, zIndex } = props
  
  return (
    <div
      className={styles.BackDrop}
      onClick={onCloseClick}
      style={{zIndex: zIndex ? zIndex : 100}}
    />
  )
}

export default Backdrop