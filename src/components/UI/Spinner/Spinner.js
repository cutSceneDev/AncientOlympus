import React from 'react'
import styles from './Spinner.css'
import { connect } from 'react-redux'

import BackDrop from '../BackDrop/BackDrop'

const spinner = props => {
  return props.spinnerIsActive ? (
    <div>
      <BackDrop
        isActive={props.spinnerIsActive}
        onClick={null}
        zIndex={300}
      />
      <div className={styles.Spinner}>
        <div className={styles.Rect1}></div>
        <div className={styles.Rect2}></div>
        <div className={styles.Rect3}></div>
        <div className={styles.Rect4}></div>
        <div className={styles.Rect5}></div>
      </div>
    </div>
  ) : null
}

const mapStateToProps = state => {
  return {
    spinnerIsActive: state.interface.spinnerIsActive
  }
}

export default connect(mapStateToProps)(spinner)