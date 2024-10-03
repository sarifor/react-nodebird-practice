import { call, put, throttle } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../reducers/post';
import axios from 'axios';

// 포스트 업로드 관련 와처 함수, 사가 함수, API 호출 함수
// - 포스트 업로드는 3초당 최대 1번으로 제한
// - throttle: ignore incoming actions for a given period of time while processing a task
// - CF) debounce: prevent calling saga until the actions are settled off
function addPostAPI(data) {
  return axios.post('/api/addpost', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    });
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