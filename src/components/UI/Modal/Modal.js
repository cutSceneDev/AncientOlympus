import React from 'react'
import styles from './Modal.css'

import BackDrop from '../BackDrop/BackDrop'
import NoRootElement from '../../../hoc/NoRootElement'

const modal = (props) => {
  return (
    <NoRootElement>
        <BackDrop active={props.active} click={props.click} />
        <div 
          className={styles.Modal} 
          style={{transform: props.active ? 'translateY(0)' : 'translateY(-100vh)'}}
        >
          {props.children}
        </div>
    </NoRootElement>
  )
}

export default modal