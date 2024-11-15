import { call, put, throttle, select } from 'redux-saga/effects';
import { 
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, 
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, 
  DELETE_LATEST_POST_REQUEST, DELETE_LATEST_POST_SUCCESS, DELETE_LATEST_POST_FAILURE
} from '../reducers/post';
import { ADD_POST_TO_ME_REQUEST } from '../reducers/user';
import axios from 'axios';
import { nanoid } from 'nanoid';

// 포스트 등록 여부, 최신 포스트 모음 가져오기
// - Q. 언제 가져오면 좋지? 전역변수 or 함수 안(지역변수)?
const postAdded = (state) => state.post.postAdded;
const latestMainPosts = (state) => state.post.mainPosts;

// 포스트 업로드 관련 와처 함수, 사가 함수, API 호출 함수
// - postID를 ADD_POST_REQUEST 단계에서 생성함으로, postID를 즉각 유저에게 넘길 수 있게 하기
// - 포스트 업로드는 3초당 최대 1번으로 제한
// - throttle: ignore incoming actions for a given period of time while processing a task
// - CF) debounce: prevent calling saga until the actions are settled off
function addPostAPI(data) {
  return axios.post('/api/addpost', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    const postId = nanoid();
    
    if (result) {
      yield put({
        type: ADD_POST_SUCCESS,
        data: {
          postId: postId,
          userId: result.data.userId,
          text: result.data.text,
          image: result.data.image,
        }
      });

      if (postAdded) {
        yield put({
          type: ADD_POST_TO_ME_REQUEST,
          data: {
            postId: postId,
          }
        })
      }
    }
  } catch(err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data
    })
  }
}

export function* watchAddPost() {
  yield throttle(3000, ADD_POST_REQUEST, addPost);
}

// 댓글 업로드 관련 와처 함수, 사가 함수, API 호출 함수
function addCommentAPI(data) {
  return axios.post('/api/addcomment', data);
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data
    });
  } catch(err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data
    })
  }
}

export function* watchAddComment() {
  yield throttle(3000, ADD_COMMENT_REQUEST, addComment);
}

// 가장 최신 게시물 삭제 관련 와처 함수, 사가 함수, API 호출 함수
function* deleteLatestPost() {
  try {
    const mainPosts = yield select(latestMainPosts);

    if (mainPosts) {
      const latestDeletedMainPosts = mainPosts.slice(1);

      yield put({
        type: DELETE_LATEST_POST_SUCCESS,
        data: { latestDeletedMainPosts }
      });
    }
  } catch(err) {
    yield put({
      type: DELETE_LATEST_POST_FAILURE,
      data: null // err.response.data
    })
  }
}

export function* watchDeleteLatestPost() {
  yield throttle(3000, DELETE_LATEST_POST_REQUEST, deleteLatestPost);
}