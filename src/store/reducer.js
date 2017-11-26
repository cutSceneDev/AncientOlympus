const initialState = {
  spinnerIsActive: false,
  user: {
    userName: '',
    isLogged: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGINUSER':
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: true,
          userName: action.payload.userName
        }
      }
    case 'SPINNER_START':
      return {
        ...state,
        spinnerIsActive: true
      }
    case 'SPINNER_STOP':
      return {
        ...state,
        spinnerIsActive: false
      }

    default:
      return state
  }
};

export default reducer