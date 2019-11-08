import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';
import {takeLatest} from 'redux-saga/effects';
import produce from 'immer';

const INITIALIZE = 'write/INITIALIZE'; //모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key값 바꾸기 
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes('write/WRITE_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD,({key, value})=>({
    key, // title, content, img 
    value, //실제바꾸려는 값
}));

const UPLOAD_IMG = 'write/UPLOAD_IMG';
export const uploadImg = createAction(UPLOAD_IMG, ({image, value})=>({
    image,
    value,
}));

export const writePost = createAction(WRITE_POST, ({title, content})=>({
    title,
    content,
}));

export const writeImg = createAction(WRITE_POST, ({title, content, image})=>({
    title,
    content,
    image,
}));

//사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postAPI.writePost);
export function* writeSaga(){
    yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
    title: '',
    content: '',
    image: '',
    post: null,
    postError: null,
    // write: {
    //     title:'',
    //     content:'',
    //     image:'',
    // }
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: {key, value} }) => 
      produce(state, draft =>{
          draft[key]= value; //특정 키 값 업데이트
    }),
    [UPLOAD_IMG]:(state, {payload:{image, value}})=>({
        ...state,
        image: value,
    }),
    [WRITE_POST]: state => ({
      ...state,
      post: null, //post와 postError 초기화
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);
export default write;