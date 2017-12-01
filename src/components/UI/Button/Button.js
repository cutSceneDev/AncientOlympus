import React from 'react'
import styles from './Button.css'

import { Link } from 'react-router-dom'

const button = props => {
  let button = (
    <button className={styles.Button} onClick={props.onClick} style={props.style}>
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