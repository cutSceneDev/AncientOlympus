const initialState = {
  user: {
    userName: '',
    isLogged: false
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'LOGINUSER') {
    console.log(action.payload);
    return {
      ...state,
      user: {
        ...state.user,
        isLogged: true,
        userName: action.userName
      }
    }
  }

  return state;
}

export default reducer;