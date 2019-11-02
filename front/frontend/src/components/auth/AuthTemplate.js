import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//회원가입, 로그인 페이지 레이아웃을 담당하는 컴포넌트

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* flex 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: low;
  justify-content: center;
  align-items: center;
  font-family: 'BMEULJIRO';
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    letter-spacing: 3px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">login/register</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
