import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../containers/auth/RegisterForm';
import close_img from '../images/btn_32_close.png';
import Button from '../components/common/Button';

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
    margin-bottom: 16px;
    text-align: left;
    font-weight: bold;
    height: 32px;
    line-height: 32px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  background-color: rgba(255,255,255,0.9);
  border-radius: 24px;
`;

const CloseButton =  styled(Button)` 
    background-image:  url(${close_img});
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
    width: 32px;
    height: 32px;
    padding: 0;
    background-color: transparent;
    border-radius: 24px;
    display: inline-block;
    vertical-align: middle;
    float: right;
    &:hover {
        background-color: #D3D3D3;
    }

`;

const RegisterModal = ({onClose}) => {
  return (
    <StyledModal>
        <TemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          회원가입<CloseButton onClick={onClose}></CloseButton>
        </div>
        <RegisterForm />
      </WhiteBox>
        </TemplateBlock>
        
    </StyledModal>
  );
};

export default RegisterModal;
