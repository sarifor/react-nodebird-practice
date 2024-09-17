import { all, fork } from 'redux-saga/effects';
import { watchLogIn, watchLogOut } from './user';
import { watchAddPost } from './post';

// 루트 사가
export default function* rootSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}