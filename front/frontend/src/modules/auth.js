import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, select, call, put } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);

const TEMP_SET_USER = 'user/TEMP_SET_USER'; //새로고침 이후 임시 로그인 처리
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK',
);
const LOGOUT = 'user/LOGOUT';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, //register, login
    key, //username, password, passwordConfirm
    value, //실제 바꾸려는 값
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register;

export const register = createAction(REGISTER, ({ username, password1, password2 }) => ({
  username,
  password1,
  password2,
}));

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

//사가 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login); //type, request 

export function* authSaga() {  
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

//user
export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const save = createAction(CHECK, checkUser=>checkUser);
export const logout = createAction(LOGOUT);
// const checkSaga = createRequestSaga(CHECK, authAPI.check);
function checkFailureSaga() {//로그인 검증 실패시 정보 초기화
  try {
    localStorage.removeItem('user'); //localStorage에서 user제거
    localStorage.removeItem('user-token');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); //logout API 호출
    localStorage.removeItem('user');
    localStorage.removeItem('user-token');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  // yield takeLatest(CHECK, save);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  register: {
    username: '',
    password1: '',
    password2: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError:null,
  checkUser:{
      username: '',
      token: '',
  },
  checkError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // state.register.username을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    [REGISTER_SUCCESS]: (state, {payload: auth}) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK]: (state, { payload: checkUser}) =>({
        ...state,
        checkUser
        // username: username,
        // token: token,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);

export default auth;