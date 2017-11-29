import React from 'react'
import styles from './Modal.css'

import Transition from 'react-transition-group/Transition'
import BackDrop from '../BackDrop/BackDrop'

const modal = props => {
  return (
    <div>
      <Transition
        in={props.isActive}
        timeout={0}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <div style={{
            opacity: state === 'entered' ? 1 : 0,
            transition: 'opacity 150ms ease-out'
          }}>
            <BackDrop onCloseClick={props.onCloseClick} />
          </div>
        )}
      </Transition>

      <Transition
        in={props.isActive}
        timeout={200}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <div 
            className={styles.Modal}
            style={{
              transform: state === 'entered' ? 'translateY(0)' : 'translateY(-50vh)',
              transition: 'all 200ms ease-out'
            }}
          >
            {props.children}
          </div>          
        )}
      </Transition>
    </div>
  )
};

export default modal