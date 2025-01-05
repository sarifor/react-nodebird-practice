import { nanoid } from 'nanoid';
import { faker } from '@faker-js/faker';

// 초깃값
// - imagePath 사용 보류 중
export const initialState = {
  mainPosts: [{
    id: "",
    User: {
      id: "",
      nickname: "",
    },
    content: "",
    Images: [],
    Comments: [],
    createdAt: null,
  }],
  // imagePaths: [],
  postAdded: null,
  isLatestPostDeletedError: null,
}

// 더미 포스트
// - 일부 더미 데이터는 faker로 생성
// - 불변성 유지
// - Q. 여기에서만은 불변성 유지하지 말아야 하나? initialState를 덮어씌워야 하니까
export const dummyPost = {
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
        id: "fan1",
        User: { nickname: 'fan1' },
        content: 'wanna go to bunnycam!',
      },
      {
        id: "fan2",
        User: { nickname: 'fan2' },
        content: 'best dancer/singer!',
      },
    ],
    createdAt: new Date("2023-07-26T12:34:56Z"),
  }],
  // imagePaths: [],
  postAdded: false,
  isLatestPostDeletedError: false,
}

export const generateDummyPost = (state) => {
  const dummyPosts = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    User: { id: faker.string.uuid(), nickname: faker.internet.username() },
    content: faker.lorem.lines(),
    Images: [],
    Comments: [],
    createdAt: faker.date.past(),
  }));

  return {
    ...state,
    mainPosts: [ ...dummyPosts, ...state.mainPosts],
    postAdded: false,
    isLatestPostDeletedError: false,
  };
};

/*
const dummyPost = {
  id: "randomNanoid",
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
*/

// 액션명
// - 댓글 관련 액션명도 Post reducer에서 관리
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const DELETE_LATEST_POST_REQUEST = 'DELETE_LATEST_POST_REQUEST';
export const DELETE_LATEST_POST_SUCCESS = 'DELETE_LATEST_POST_SUCCESS';
export const DELETE_LATEST_POST_FAILURE = 'DELETE_LATEST_POST_FAILURE';

// 포스트 리듀서
// - 상태를 불변하게 유지하며 새 요소를 배열의 앞쪽에 추가함으로,
//   최신 포스트가 상단에 위치하게 함
// - 포스트 추가 시 더미 데이터를 기반으로 id, User.id, content, images만 바꿔 새 포스트 데이터로 삼음
// - 댓글 추가 시 닉네임에 사용자 아이디 들어가게 해놓음
const postReducer = ((state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS: {
      const newState = generateDummyPost(state);
      return newState;
    }
    case LOAD_POSTS_FAILURE: {
      const newState = {
        ...state,
      }
      return newState;
    }
    case ADD_POST_SUCCESS: {
      const newPost = {
        ...dummyPost,
        id: action.data.postId,
        User: {
          ...dummyPost.User,
          id: action.data.userId,
        },
        content: action.data.text,
        Images: action.data.images ? [{ src: action.data.image }] : [],
      };

      const newState = {
        ...state,
        mainPosts: [
          newPost,
          ...state.mainPosts,
        ],
        postAdded: true,
      }

      return newState;
    }
    case ADD_POST_FAILURE: {
      const newState = {
        ...state,
        postAdded: false,
      }
      return newState;
    }
    case ADD_COMMENT_SUCCESS: {
      const newState = {
        ...state,
        mainPosts: state.mainPosts.map((post) => {
          if (post.id === action.data.postId) {
            return {
              ...post,
              Comments: [...post.Comments, {
                id: nanoid(), 
                User: { 
                  nickname: action.data.userId,
                }, 
                content: action.data.comment,
              }],
            };
          } else {
            return post;
          }
        }),
      };
      return newState;
    }
    case ADD_COMMENT_FAILURE: {
      const newState = {
        ...state,
      }
      return newState;
    }
    case DELETE_LATEST_POST_SUCCESS: {
      const newState = {
        ...state,
        mainPosts: [...action.data.latestDeletedMainPosts],
      }
      return newState;
    }
    case DELETE_LATEST_POST_FAILURE: {
      const newState = {
        ...state,
        isLatestPostDeletedError: true,
      }
      return newState;
    }
    default:
      return state;
  }
});

export default postReducer;