import { createWrapper } from 'next-redux-wrapper'; // 괄호 빼먹지 말기
import { createStore } from 'redux';
import reducer from '../reducers';

// 스토어
const configureStore = () => {
  const store = createStore(reducer);
  
  // 액션 디스패치
  store.dispatch({
    type: 'CHANGE_NICKNAME',
    data: 'Fancy girl',
  })
  return store;
};

// 래퍼
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;