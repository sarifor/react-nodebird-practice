// HYDRATE(액션) 가져오기
import { HYDRATE } from 'next-redux-wrapper';

// state 초깃값
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  }
};

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

// 리듀서
// - "HYDRATE 액션은 서버에서 페이지를 렌더링하고 클라이언트로 전송할 때 자동으로 발생"
// - "HYDRATE 액션이 발생하면 서버와 클라이언트 양쪽의 상태가 통합됨"
const rootReducer = ((state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log(HYDRATE);
      return { ...state, ...action.payload };
    case 'LOG_IN': {
      const newState = {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        }
      };
      return newState;
    }
    case 'LOG_OUT': {
      const newState = {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        }
      };
      return newState;
    }
    default:
      return state;
  }
});

export default rootReducer;