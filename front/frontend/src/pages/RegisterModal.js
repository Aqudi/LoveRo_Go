import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../containers/auth/RegisterForm';

const StyledModal = styled.div`
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const TemplateBlock = styled.div`
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
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  background: white;
  border-radius: 2px;
  // opacity: 80%;
`;
const RegisterModal = ({onClose}) => {
  return (
    <StyledModal>
        <TemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          회원가입
        </div>
        <RegisterForm />
        <button onClick={onClose}>닫기</button>

      </WhiteBox>
        </TemplateBlock>
        
    </StyledModal>
  );
};

export default RegisterModal;
