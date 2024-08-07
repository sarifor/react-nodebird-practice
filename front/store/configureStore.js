import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// 리듀서 불러오기
// - index.js는 디렉터리 이름만으로 불러올 수 있음
import reducer from '../reducers';

// 스토어 설정
// - 개발 중에만 데브툴 연결
const configureStore = () => {
  const middleware = [];
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middleware))
  : composeWithDevTools(applyMiddleware(...middleware))
  const store = createStore(reducer, enhancer);
  return store;
};

// 래퍼
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;