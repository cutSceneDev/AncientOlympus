import React from 'react'
import styles from './Input.css'

const input = props => {
  let inputElement = null;

  switch (props.tagType) {
    case 'input':
    inputElement = (
        <input
          className={styles.Input}
          id={props.id}
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
    <div className={styles.InputWrapper}>
      <label className={styles.Label} htmlFor={props.id}>{props.label}</label>
        {inputElement}
      <div className={styles.Warning}>{props.warning}</div>
    </div>
  )
};

export default input