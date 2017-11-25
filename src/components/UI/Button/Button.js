import React from 'react'
import styles from './Button.css'

const button = (props) => {
  return (
    <button className={styles.Button} onClick={props.handleClick} style={props.style}>
      {props.children}
    </button>
  )
}

export default button