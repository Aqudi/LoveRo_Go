import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
    background-color: white;
    box-sizing: border-box;
    padding: 0 10px;
    opacity: 50%;
    border-radius: 6px;
    border: none;
    outline: none;
    width: 100%;
    height: 25px;
    color: black;
    &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
    margin-top: 1rem;
    }
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
//에러처리
const ErrorMessage = styled.div`
  color: #ff4949;
  text-align: left;
  font-size: 11px;
  margin: 6px 0 0 4px;
  letter-spacing: -0.33px;
  font-weight: bold;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  background: #2d2d2c;
    font-size: 12px;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
    
  const loginError = () => {
      if(error && type ==='login')
      return (<ErrorMessage>{error}</ErrorMessage>);
  };
  const registerError = () => {
      if(error && type ==='register')
      return (<ErrorMessage>{error}</ErrorMessage>);
  };
  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="ID"
          onChange={onChange}
          value={form.username}
        />
        {type==='login'&& (
         <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="PW"
          type="password"
          onChange={onChange}
          value={form.password}
        />)}
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="password1"
            placeholder="PW"
            type="password"
            onChange={onChange}
            value={form.password1}
          />
        )}
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="password2"
            placeholder="PW-Confirm"
            type="password"
            onChange={onChange}
            value={form.password2}
          />
        )}
          {loginError() }
        {registerError()}
		<ButtonWithMarginTop cyan fullwidth style = {{marginTop:'1rem'}}>
			{text}
		</ButtonWithMarginTop>
      </form>
          <Footer></Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;


