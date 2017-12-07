import * as actionTypes from './actionTypes'

// import { auth } from '../../firebase/firebase'

export const loginUser = (email) => {
  return {
    type: actionTypes.LOGIN_USER,
    email: email
  }
}

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER
  }
}

// export const loginUserAsync = (email, password) => {
//   return (dispatch, getState) => {
//   }
// }