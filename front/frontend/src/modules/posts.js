import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');

const LIST_POSTS_PAGE = 'posts/LIST_POSTS_PAGE';

export const listPosts = createAction(LIST_POSTS, ({user, page}) => ({
  user,
  page,
}));
export const changePage = createAction(LIST_POSTS_PAGE,({pageNum})=>({pageNum}));

const listPostsSage = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSage);
}

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
  nextPage: null,
  prevPage: null,
  pageNum: 1,
};

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: data, meta: response }) => ({
      ...state,
      posts:data.results,
      lastPage: Math.ceil(parseInt(data.count, 10)/8),
      nextPage: data.next,
      prevPage: data.previous,
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_POSTS_PAGE] : (state, {pageNum})=>({
        ...state,
        pageNum,
    }),
  },
  initialState,
);

export default posts;