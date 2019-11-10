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
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    letter-spacing: 3px;
    font-size: 18px;
    font-weight: bold;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  background: rbga(255,255,255,0.9);
  border-radius: 24px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          회원가입
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
