import * as actionTypes from '../actions'

const initialState = {
  spinnerIsActive: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SPINNER_START:
      return {
        ...state,
        spinnerIsActive: true
      }
    case actionTypes.SPINNER_STOP:
      return {
        ...state,
        spinnerIsActive: false
      }

    default:
      return state
  }
};

export default reducer