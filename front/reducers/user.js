// 유저 초기 상태
// - Q. signUpData, loginData 용도?
export const initialState = {
  isLoggedIn: false,
  isLoading: false,
  userInfo: null,
  isSignUpError: false,
  // signUpData: {},
  // loginData: {},
}

// 더미 유저
// - data: id, password가 옴
// - 속성명: 시퀄라이즈로 합쳐 주는 경우 대문자
// - Q. ... 복습하기
// - Q. id /= 유저 아이디. id를 뭘로 바꾸면 좋을까?
const dummyUser = (data) => ({
  ...data,
  nickname: "CommonTempNickname",
  // id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
})

// 더미 유저 배열
const dummyUsers = [
  {
    isLoggedIn: false,
    isLoading: false,
    userInfo: {
      id: "abc",
      password: "def",
      nickname: "ggg",
    }
  },
];

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// 유저 리듀서
// - SIGNUP_SUCCESS 시, id, password, nickname을 받아 저장
// - LOG_IN_SUCCESS 시, id, password를 받아 저장
//   또한 dummyUser 함수를 통해 nickname에 임시 값 저장하고, Followings, Followers, Posts 속성 추가
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
        userInfo: dummyUser(action.data),
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
    case EDIT_NICKNAME_REQUEST: {
      const newState = {
        ...state,
      }
      return newState;
    }
    case EDIT_NICKNAME_SUCCESS: {
      const newState = {
        ...state,
        userInfo: {
          ...state.userInfo,
          nickname: action.data.newNickname
        }
      }
      return newState;
    }
    case EDIT_NICKNAME_FAILURE: {
      const newState = {
        ...state,
      }
      return newState;
    }
    case SIGNUP_SUCCESS: {
      const newState = {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        userInfo: {
          ...state.userInfo,
          id: action.data.id,
          password: action.data.password,
          nickname: action.data.nickname,
        },
      }
      dummyUsers.push(newState);
      return newState;
    }
    case SIGNUP_FAILURE: {
      const newState = {
        ...state,
        isSignUpError: true,
      }
      return newState;
    }
    default:
      return state;
  }
});

export default userReducer;