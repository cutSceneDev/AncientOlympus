import * as actionTypes from './actionTypes'

export const spinnerStart = () => {
  return {
    type: actionTypes.SPINNER_START
  }
}

export const spinnerStop = () => {
  return {
    type: actionTypes.SPINNER_STOP
  }
}