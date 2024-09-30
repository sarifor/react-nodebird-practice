export const initialState = {
  isLoggedIn: false,
  isLoading: false,
  userInfo: null,
  signUpData: {},
  loginData: {},
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// 유저 리듀서
// - Q. 리듀서의 LOG_IN_REQUEST 액션 처리와, 사가의 LOG_IN_REQUEST 액션 처리 중 어느 쪽이 먼저 실행?
const userReducer = ((state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      const newState = {
        ...state,
        isLoading: true,
      }
      return newState;
    }
    case LOG_IN_SUCCESS: {
      const newState = {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        userInfo: action.data,
      }
      return newState;
    }
    case LOG_IN_FAILURE: {
      const newState = {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        userInfo: null,
      }
      return newState;
    }
    case LOG_OUT_REQUEST: {
      const newState = {
        ...state,
        isLoading: true,
      }
      return newState;
    }    
    case LOG_OUT_SUCCESS: {
      const newState = {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        userInfo: null,
      }
      return newState;
    }
    case LOG_OUT_FAILURE: {
      const newState = {
        ...state,
        isLoading: false,
      }
      return newState;
    }
    default:
      return state;
  }
});

export default userReducer;