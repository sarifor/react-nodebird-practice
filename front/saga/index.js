import { all, fork, call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// 로그인 관련 와처 함수, 사가 함수, API 호출 함수
// - LOG_IN_FAILURE 액션을 테스트해보려면? 존재하지 않는 URL에 요청 보내게 하기
// - call: 동기 함수 호출. 함수가 완료될 때까지 기다림
// - put: 리덕스 스토어에 액션을 디스패치
// - yield: 비동기 작업이 완료될 때까지 기다림. 테스트에 편함  // Q. 이해 재시도
// - takeLatest는 가장 마지막에 발생한 액션만 처리, take는 발생한 액션을 한 번만 감지
function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data)
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data
    });
  } catch(err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data
    });
  }
}

function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

// 로그아웃 관련 와처 함수, 사가 함수, API 호출 함수
function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data
    });
  } catch(err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data
    })
  }
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

// 포스트 업로드 관련 와처 함수, 사가 함수, API 호출 함수
function addPostAPI(data) {
  return axios.post('/api/addpost', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data
    });
  } catch(err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data
    })
  }
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

// 루트 사가
// - all: 여러 사가 병렬 실행
// - fork: 비동기 함수 실행. 함수 완료를 기다리지 않고 즉시 다음 작업 실행
export default function* rootSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}