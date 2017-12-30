import React from 'react'
import styles from './Button.css'

import { Link } from 'react-router-dom'

const Button = (props) => {
  const { disabled, onClick, style, link } = props
  const buttonStyles = [styles.Button, disabled ? styles.Disabled : styles.Active].join(' ')

  let button = (
    <button className={buttonStyles} onClick={!disabled ? onClick : null} style={style}>
      {props.children}
    </button>
  )

  if (link) {
    button = (
      <Link to={link}>
        {button}
      </Link>
    )
  }

  return button
}

export default Button