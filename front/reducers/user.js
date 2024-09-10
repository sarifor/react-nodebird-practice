export const initialState = {
  isLoggedIn: false,
  userInfo: null,
  signUpData: {},
  loginData: {},
}

// 유저 리듀서
const userReducer = ((state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_SUCCESS': {
      const newState = {
        ...state,
        isLoggedIn: true,
        userInfo: action.data,
      }
      return newState;
    }
    case 'LOG_IN_FAILURE': {
      const newState = {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      }
      return newState;
    }
    case 'LOG_OUT_SUCCESS': {
      const newState = {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      }
      return newState;
    }
    case 'LOG_OUT_FAILURE': {
      const newState = {
        ...state,
      }
      return newState;
    }
    default:
      return state;
  }
});

export default userReducer;