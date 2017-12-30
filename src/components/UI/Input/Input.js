import React from 'react'
import styles from './Input.css'

const Input = (props) => {
  const { tagType, placeholder, change, value, type, keyPress, label, notValid, errorMessage } = props
  let inputElement = null;

  switch (tagType) {
    case 'input':
      inputElement = (
        <input
          className={styles.Input}
          placeholder={placeholder}
          onChange={change}
          value={value}
          type={type}
          onKeyPress={keyPress}
        />
      )
      break;
    
    default:
      inputElement = <p>Wrong Input config</p>
  }

  return (
    <label className={styles.Label}>
      <span className={styles.Text}>
        {label}
      </span>
      {inputElement}
      <span className={styles.Warning}>
        { notValid ? errorMessage : '' }
      </span>
    </label>
  )
};

export default Input