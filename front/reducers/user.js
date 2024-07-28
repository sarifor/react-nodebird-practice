export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
}

// 로그인 액션 크리에이터
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}

// 로그아웃 액션 크리에이터
export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

const userReducer = ((state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      const newState = {
        ...state,
        isLoggedIn: true,
        user: action.data,
      }
      return newState;
    }
    case 'LOG_OUT': {
      const newState = {
        ...state,
        isLoggedIn: false,
        user: null,
      }
      return newState;
    }
    default:
      return state;
  }
});

export default userReducer;