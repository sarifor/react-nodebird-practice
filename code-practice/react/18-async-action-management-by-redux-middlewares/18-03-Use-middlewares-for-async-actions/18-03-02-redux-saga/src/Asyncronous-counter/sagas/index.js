// # 비동기 API 호출 처리
// - 호출 결과에 따라 성공 또는 실패 액션 디스패치
// - call: 매개변수로 전달된 동기 또는 비동기 함수 실행
// - put: 액션 디스패치
// - takeEvery: 액션이 디스패치될 때마다 새로운 작업 분기

import { call, put, takeEvery } from 'redux-saga/effects';

function fetchDataApi() {
  // throw new Error('에러!');
  return fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/120000.json').then(response => response.json());
}

function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataApi);

    yield put({
      type: 'FETCH_DATA_SUCCESS',
      payload: data,
    })
  } catch (error) {
    yield put({
      type: 'FETCH_DATA_FAILURE',
      payload: error.message,
    })
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default rootSaga;