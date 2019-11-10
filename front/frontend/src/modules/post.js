import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE,
] = createRequestActionTypes('post/READ_POST');
const UNLOAD_POST = 'post/UNLOAD_POST'; //포스트 페이지에서 벗어날 때 데이터 비우기
const MODAL = 'post/MODAL';
const MODAL_ID = 'post/MODAL_ID';

export const readPost = createAction(READ_POST, id => id);
export const unloadPost = createAction(UNLOAD_POST);
export const viewModal = createAction(MODAL, ({view,value}) =>({view, value}));
export const viewId = createAction(MODAL_ID, ({modalId,id}) =>({modalId, id}));

const readPostSaga = createRequestSaga(READ_POST, postAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  error: null,
  view: false,
  modalId: 1,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST]: () => initialState,
    [MODAL]: (state, {payload: {view, value}}) => ({
        ...state,
        view:value,
    }),
    [MODAL_ID]:(state, {payload:{modalId,id}}) => ({
        ...state,
        modalId:id,
    })
  },
  initialState,
);

export default post;
