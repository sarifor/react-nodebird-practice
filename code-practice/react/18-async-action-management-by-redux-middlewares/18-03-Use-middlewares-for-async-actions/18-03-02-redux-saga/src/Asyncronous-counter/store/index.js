import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// store에 reducer와 saga 미들웨어 적용
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// saga 실행
sagaMiddleware.run(rootSaga);

export default store;