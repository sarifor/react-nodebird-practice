/* 
# Redux
  1. 주요 개념
    - Action: State에 어떠한 변화가 필요하면 발생하는 것. 객체로 표현
    - Action Creater(액션 생성 함수): 액션 객체를 만들어 주는 함수
    - Reducer: 변화를 일으키는 함수. 현재 상태와 액션 객체를 파라미터로 받아서 새로운 상태를 반환
    - Store: 프로젝트에 리덕스를 적용. 앱의 State, 리듀서, 중요 내장 함수 들어있음

  2. 앱의 흐름
    0) Reducer가 들어 있는 Store를 앱에 붙여놓고,
    1) 앱의 버튼을 클릭해서 Action이 발생되면(Dispatch),
    2) Reducer가 현재 State와 Action을 받아와 참고하여 새 State를 "Store에게" 반환해주고,
    3) Store의 State가 변경될 때마다 render 함수가 호출되어, 새 State 반영해줌
*/

// DOM 노드(사진, 버튼)
const photo = document.querySelector('#photo');
const transformButton = document.querySelector('#transformButton');

// 액션 타입 정의
const CHANGE_PHOTO = "CHANGE_PHOTO";

// 액션 생성 함수
const changePhoto = () => (
  // 액션 객체 반환
  {
    type: "CHANGE_PHOTO",
  }
);


// state 초깃값
const initialState = {
  url: './haerin.png',
  isHaerin: true,
}


// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PHOTO:
      // 불변성을 유지하기 위해 현재 state 객체의 모든 속성을 '새 객체'에 복사하고,
      // url과 isHaerin 속성을 변경하여 반환
      return {
        ...state,
        url: state.isHaerin ? './neko-chan.png' : './haerin.png',
        isHaerin: !state.isHaerin,
      };
    default:
      return state;
  }
};


// 스토어 생성
const { createStore } = window.Redux;
const store = createStore(reducer);


// 이미 HTML을 사용하여 만들어진 UI의 속성을 상태에 따라 변경
const render = () => {
  const state = store.getState();
  photo.src = state.url;
};


// 초기 렌더링
render();


// 스토어의 상태가 변경될 때마다 렌더 함수 호출
store.subscribe(render);


// 버튼 클릭 시 액션 발생시키기
transformButton.onclick = () => {
  store.dispatch(changePhoto());
};
