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
      <div className={styles.LabelText}>
        <span className={styles.Text}>{props.label}</span>
        <span className={styles.Warning}>
          {props.notValid ? 
            props.errorMessage : 
            ''
          }
        </span>
      </div>
      {inputElement}
    </label>
  )
};

export default input