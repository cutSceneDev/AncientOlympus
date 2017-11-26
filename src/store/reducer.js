const initialState = {
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

    default:
      return state
  }
};

export default reducer