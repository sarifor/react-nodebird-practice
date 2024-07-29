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
      { src: "https://static.wikia.nocookie.net/witchers/images/d/d3/Hanni_Bubble_Gum_Concept_Photo_%283%29.jpg/revision/latest/scale-to-width-down/1000?cb=20240426183935" },
      { src: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/gTNwJV2JUUFGfveQHwnoZBOqmIh.jpg" },
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
    ]
  }],
  imagePath: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';

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
  Comments: []
};

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