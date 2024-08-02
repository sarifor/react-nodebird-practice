// 초깃값
// - 더미 데이터
export const initialState = {
  mainPosts: [{
    id: "abc",
    User: {
      id: "abc",
      nickname: 'Hanni Pham',
    },
    content: 'Hanni is so cute! #NewJeans #Supernatural',
    Images: [
      { src: "https://biz.chosun.com/resizer/PGhn-Zo2K5IXzOLX62L5LccWqio=/530x763/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/QZ6OXTM65GKP4VLFLKP662RXYY.jpg", alt: "cute"},
      { src: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/gTNwJV2JUUFGfveQHwnoZBOqmIh.jpg", alt: "kawaii" },
      { src: "https://cdn.emetro.co.kr/data2/content/image/2024/08/02/.cache/512/20240802500007.jpg", alt: "NewJeans" },
    ],
    Comments: [
      {
        User: { nickname: 'fan1' },
        content: 'wanna go to bunnycam!',
      },
      {
        User: { nickname: 'fan2' },
        content: 'best dancer/singer!',
      },
    ],
    createdAt: new Date("2023-07-26T12:34:56Z"),
  }],
  imagePaths: [],
  postAdded: false,
}

// 액션 타입
// - 액션 타입을 상수로 빼 놓으면
// - 리듀서의 switch 문에서 액션 타입을 쓸 때 오타 나는 것을 막을 수 있음
const ADD_POST = 'ADD_POST';

// 액션 크리에이터
export const addPostAction = () => {
  return {
    type: ADD_POST,
  }
}

const dummyPost = {
  id: "hij",
  User: {
    id: "hij",
    nickname: 'Minji Kim',
  },
  content: 'Like puppy! #NewJeans',
  Images: [],
  Comments: [
    {
      User: { nickname: 'fan3' },
      content: 'Gogo~!!',
    },
    {
      User: { nickname: 'fan4' },
      content: 'Wan-wan!',
    },    
  ],
  createdAt: new Date("2023-07-26T12:34:56Z"),
};

// 리듀서
// - 상태를 불변하게 유지하며 새 요소를 배열의 앞쪽에 추가함으로,
// - 최신 포스트가 상단에 위치하게 함
const postReducer = ((state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST': {
      const newState = {
        ...state,
        mainPosts: [
          dummyPost,
          ...state.mainPosts,
        ],
        postAdded: true,
      }
      return newState;
    }
    default:
      return state;
  }
});

export default postReducer;