import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login, save } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
import client from '../../lib/api/client';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, checkUser } = useSelector(({ auth , checkUser }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    checkUser: auth.checkUser,
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
  //폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  // 처음 렌더링 될때 폼 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
	  // console.log(auth, authError);
    if (authError) {
      console.log('오류발생');
      console.log(authError);
      setError('로그인 실패: Id, Pw 를 확인해 주세요.');
      return;
    }
    if (auth) {
      console.log('로그인 성공', auth.user.username);
      const checkUser = {
          username : auth.user.username,
          token :auth.token,
      } 
      dispatch(save(checkUser));
      try{
          localStorage.setItem('user',auth.user.username);
          localStorage.setItem('user-token',auth.token);
           client.defaults.headers.common['Authorization']='JWT '+localStorage.getItem('user-token');

      } catch(e){
          console.log('localStorage is not working');
      }
      history.push('/main');
    }
  }, [auth, authError, history, dispatch, checkUser]);

  return (
    <AuthForm
    	type="login"
		form={form}
		onChange={onChange}
		onSubmit={onSubmit}
		error={error}
    />
  );
};

export default withRouter(LoginForm);
