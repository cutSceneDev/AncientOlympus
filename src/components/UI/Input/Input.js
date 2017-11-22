import React from 'react'
// import './Input.css'

const input = (props) => {
  let input = null

  switch (props.tagType) {
    case 'input':
      input = (
        <input 
          placeholder={props.placeholder}
          onChange={props.change}
          value={props.value}
        />
      )
      break;
    
    default:
      input = (
        <input 
          placeholder={props.placeholder}
          onChange={props.change}
          value={props.value}
        />
      )
  }

  return input
}

export default input