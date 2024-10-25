import { all, fork } from 'redux-saga/effects';
import { watchLogIn, watchLogOut, watchEditNickname, watchSignUp } from './user';
import { watchAddPost, watchAddComment, watchAddPostToMe } from './post';

// 루트 사가
// - 새로운 와치 함수 생길 때마다 여기에도 추가하는 것 잊지 말기!
export default function* rootSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchEditNickname),
    fork(watchSignUp),
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchAddPostToMe),
  ]);
}