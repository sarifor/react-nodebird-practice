import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// redux-thunk
// - 강의에선 thunkMiddleware from 'redux-thunk';
import { thunk } from 'redux-thunk';

// redux-saga
import createSagaMiddlewar from 'redux-saga';
import rootSaga from '../saga';

// 리듀서 불러오기
// - index.js는 디렉터리 이름만으로 불러올 수 있음
import reducer from '../reducers';

// 로깅 미들웨어
// - 액션 일어날 때마다 액션명을 콘솔에 출력하기
// - 삼단 고차함수 구조
// - 미들웨어는 액션과 리듀서 사이에 위치하여, 
//   중간에 액션을 가로채 처리하고, 
//   next(다음 미들웨어 혹은 리듀서)로 액션을 넘김
// - Q. return next(action)과 next(action)의 차이?
function loggerMiddleware() {
  return function(next) {
    return function(action) {
      console.log("loggerMiddleware: ", action);
      return next(action);
    }
  }
}

// 스토어 설정
// - 개발 중에만 데브툴 연결
// - thunk 넣지 않으면 Error: Actions must be plain objects. Use custom middleware for async actions.
// - Q. thunk는 import한 걸 바로 넣고, redux-saga는 인스턴스를 생성해 넣어주는 이유?
const configureStore = () => {
  const sagaMiddleware = createSagaMiddlewar();
  const middleware = [thunk, sagaMiddleware, loggerMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middleware))
  : composeWithDevTools(applyMiddleware(...middleware))
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

// 래퍼
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;