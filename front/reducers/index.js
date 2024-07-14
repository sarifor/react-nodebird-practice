// state 초깃값
const initialState = {
  name: 'Lee Hyein',
  age: 16,
  password: 'plasticLove',
};

// 리듀서
const rootReducer = ((state = initialState, action) => {
  switch (action.type) {
    // 액션 타입이 일치하면
    case 'CHANGE_NICKNAME': {
      // 새 state(다음 state) 리턴
      const newState = {
        ...state,
        name: action.data,
      };
      console.log(newState); // {name: 'Fancy girl', age: 16, password: 'plasticLove'}
      return newState;
    }
    default:
      return state;
  }
});

export default rootReducer;