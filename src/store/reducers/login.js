import * as actionTypes from '../actions/actionTypes'

const initialState = {
  email: '',
  isLogged: false,
  loginWarning: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        email: action.email,
        isLogged: true
      }
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        email: '',
        isLogged: false
      }
    default:
      return state
  }
};

export default reducer