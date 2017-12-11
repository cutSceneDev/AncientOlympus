import * as actionTypes from '../actions/actionTypes'

const initialState = {
  email: '',
  isLogged: false,
  loginErrorMessage: '',
  regErrorMessage: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        email: action.email || '',
        isLogged: true
      }

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        email: '',
        isLogged: false
      }

    case actionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        loginErrorMessage: action.message
      }

    case actionTypes.SET_REG_ERROR:
      return {
        ...state,
        regErrorMessage: action.message
      }
      
    default:
      return state
  }
};

export default reducer