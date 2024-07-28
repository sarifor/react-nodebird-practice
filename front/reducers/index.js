// HYDRATE(액션) 가져오기
import { HYDRATE } from 'next-redux-wrapper';

// 리듀서 합쳐주는 메서드 가져오기
import { combineReducers } from 'redux';

// 다른 리듀서들을 가져오기
import user from './user';
import post from './post';

// 리듀서
// - "HYDRATE 액션은 서버에서 페이지를 렌더링하고 클라이언트로 전송할 때 자동으로 발생"
// - "HYDRATE 액션이 발생하면 서버와 클라이언트 양쪽의 상태가 통합됨"
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log(HYDRATE);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;