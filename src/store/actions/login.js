import * as actionTypes from './actionTypes'
import { auth } from '../../firebase/firebase'
import { spinnerStart, spinnerStop } from './interface'

export const loginUser = (email) => {
  return {
    email,
    type: actionTypes.LOGIN_USER
  }
}

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER
  }
}

const setLoginError = (message) => {
  return {
    message,
    type: actionTypes.SET_LOGIN_ERROR
  }
}

const setRegError = (message) => {
  return {
    message,
    type: actionTypes.SET_REG_ERROR
  }
}

export const loginUserAsync = (email, password) => {
  return (dispatch, getState) => {
    dispatch( spinnerStart() )
    auth.signInWithEmailAndPassword(email, password)
      .then( () => {
        dispatch( loginUser(email) ) 
        dispatch( spinnerStop() )
      } )
      .catch(error => {
        dispatch( setLoginError(error.message) )
        dispatch( spinnerStop() )
      })
  }
}

export const regUserAsync = (email, password) => {
  return (dispatch, getState) => {
    dispatch( spinnerStart() )
    auth.createUserWithEmailAndPassword(email, password)
      .then( () => {
        dispatch( loginUser(email) ) 
        dispatch( spinnerStop() )
      } )
      .catch(error => {
        dispatch( setRegError(error.message) )
        dispatch( spinnerStop() )
      })
  }
}


export const logoutUserAsync = () => {
  return (dispatch, getState) => {
    dispatch( spinnerStart() )
    auth.signOut()
      .then( () => {
        dispatch( logoutUser() )
        dispatch( spinnerStop() ) 
      } )
      .catch(error => {
        console.info(error)
        dispatch( spinnerStop() ) 
      });
  }
}