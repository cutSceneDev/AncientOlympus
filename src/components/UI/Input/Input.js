import React from 'react'
import styles from './Input.css'

const input = (props) => {
  let inputElement = null;

  switch (props.tagType) {
    case 'input':
      inputElement = (
        <input
          className={styles.Input}
          placeholder={props.placeholder}
          onChange={props.change}
          value={props.value}
          type={props.type}
          onKeyPress={props.keyPress}
        />
      )
      break;
    
    default:
      inputElement = <p>Wrong Input config</p>
  }

  return (
    <label className={styles.Label}>
      <span className={styles.Text}>
        {props.label}
      </span>
      {inputElement}
      <span className={styles.Warning}>
        { props.notValid ? props.errorMessage : '' }
      </span>
    </label>
  )
};

export default input