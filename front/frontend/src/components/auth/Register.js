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
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  background: #2d2d2c;
    font-size: 12px;
`;

const Register = ({ type, form, onChange, onSubmit, error }) => {
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
          <StyledInput
            autoComplete="new-password"
            name="password1"
            placeholder="PW"
            type="password"
            onChange={onChange}
            value={form.password1}
          />
          <StyledInput
            autoComplete="new-password"
            name="password2"
            placeholder="PW-Confirm"
            type="password"
            onChange={onChange}
            value={form.password2}
          />
        {error && (<ErrorMessage>{error}</ErrorMessage>) }
		<ButtonWithMarginTop cyan fullwidth style = {{marginTop:'1rem'}}>
			완료
		</ButtonWithMarginTop>
      </form>
          <Footer></Footer>
    </AuthFormBlock>
  );
};

export default Register;