import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from '../reducers';

// 스토어 설정
const configureStore = () => {
  const store = createStore(reducer);
  return store;
};

// 래퍼
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;