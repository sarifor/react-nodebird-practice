import { call, take, takeEvery, put, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';
import { LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from '../reducers/user';

import axios from 'axios';


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