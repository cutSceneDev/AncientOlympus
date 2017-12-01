import * as actionTypes from '../actions'

const initialState = {
  user: {
    userName: '',
    isLogged: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: true,
          userName: action.payload.userName
        }
      }
    default:
      return state
  }
};

export default reducer