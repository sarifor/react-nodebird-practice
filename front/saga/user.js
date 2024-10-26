import { call, take, takeEvery, takeLatest, put, delay, throttle, select } from 'redux-saga/effects';
import { 
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE,
  ADD_POST_TO_ME_REQUEST, ADD_POST_TO_ME_SUCCESS, ADD_POST_TO_ME_FAILURE,
} from '../reducers/user';

import axios from 'axios';

// 막 생성된 postId 가져오기
// - Q. 위치는 어디가 좋지? 전역변수 or addPostToMe 안(지역변수)?
const latestPostId = (state) => state.post.mainPosts[0].id;

// 로그인 관련 와처 함수, 사가 함수, API 호출 함수
// - 3초 대기 후에 LogInAPI 호출 실행
// - take: 액션을 한 번만 감지. 동일 액션을 다시 감지하려면 while(true) 문이 필요(동기적)
// - 사가에서 비동기 작업은 yield로 제어해야 함
//   때문에 watchLogin 함수에서 logIn 함수를 호출할 때 그냥 'logIn(action)'이라고 하면 안 됨
// - delay: block execution for ms milliseconds
function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    yield delay(3000);
    const result = yield call(logInAPI, action.data)
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data
    });
  } catch(err) {
    yield put({
      type: LOG_IN_FAILURE,
      data: err.response.data
    });
  }
}

export function* watchLogIn() {
  while (true) {
    const action = yield take(LOG_IN_REQUEST);
    yield call(logIn, action);
  }
}

// 로그아웃 관련 와처 함수, 사가 함수, API 호출 함수
// - takeEvery: take와 while(true) 조합 대신 사용. 루프 없이 동일 액션 반복적 처리(비동기적)
// - takeEvery의 동작은 Logout 버튼을 누르면 액션이 두 번 디스패치되게 하는 방법으로 확인
function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data
    });
  } catch(err) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: err.response.data
    })
  }
}

export function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}


// 닉네임 수정 관련 와처 함수, 사가 함수, API 호출 함수
// - Q. API 페이지 이름에는 캐멀 케이스 안 쓰나?
function editNicknameAPI(data) {
  return axios.post('/api/editnickname', data);
}

function* editNickname(action) {
  try {
    const result = yield call(editNicknameAPI, action.data);
    yield put({
      type: EDIT_NICKNAME_SUCCESS,
      data: result.data
    });
  } catch(err) {
    yield put({
      type: EDIT_NICKNAME_FAILURE,
      data: err.response.data
    })
  }
}

export function* watchEditNickname() {
  yield takeEvery(EDIT_NICKNAME_REQUEST, editNickname);
}

// 회원 가입 관련 와처 함수, 사가 함수, API 호출 함수
function signUpAPI(data) {
  return axios.post('/api/signup', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGNUP_SUCCESS,
      data: result.data
    });
  } catch(err) {
    yield put({
      type: SIGNUP_FAILURE,
      data: err.response.data
    })
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

// 포스트 정보 유저 추가 관련 와처 함수, 사가 함수, API 호출 함수
// - Q. 'state'로 post state 가져오기, select?
function* addPostToMe() {
  try {
    const postId = yield select(latestPostId);
    
    yield put({
      type: ADD_POST_TO_ME_SUCCESS,
      data: { postId },
    });
  } catch(err) {
    yield put({
      type: ADD_POST_TO_ME_FAILURE,
      data: null // err.response.data
    })
  }
}

export function* watchAddPostToMe() {
  yield throttle(3000, ADD_POST_TO_ME_REQUEST, addPostToMe);
}