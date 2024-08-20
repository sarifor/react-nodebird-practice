import axios from 'axios';

export const initialState = {
  isLoggedIn: false,
  userInfo: null,
  signUpData: {},
  loginData: {},
}

// 로그인 액션 크리에이터
// - 액션 3개: 로그인 요청, 로그인 요청 성공, 로그인 요청 실패
// - redux-thunk로 비동기 호출 처리
export const loginAction = (data) => {
  return (dispatch, getState) => {
    // const state = getState();
    // console.log(state);

    dispatch(loginRequestAction(data));

    axios.post('/api/login', data)
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      })
  }
}


export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}

export const loginSuccessAction = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
}

export const loginFailureAction = (data) => {
  return {
    type: 'LOG_IN_FAILURE',
    data,
  }
}

// 로그아웃 액션 크리에이터
export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

// 유저 리듀서
const userReducer = ((state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST': {
      const newState = {
        ...state,
      }
      return newState;
    }
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
    case 'LOG_OUT': {
      const newState = {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      }
      return newState;
    }
    default:
      return state;
  }
});

export default userReducer;