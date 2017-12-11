import React from 'react'
import styles from './Button.css'

import { Link } from 'react-router-dom'

const button = props => {
  const buttonStyles = [styles.Button, props.disabled ? styles.Disabled : styles.Active].join(' ')

  let button = (
    <button className={buttonStyles} onClick={!props.disabled ? props.onClick : null} style={props.style}>
      {props.children}
    </button>
  )

  if (props.link) {
    button = (
      <Link to={props.link}>
        {button}
      </Link>
    )
  }

  return button
}

export default button