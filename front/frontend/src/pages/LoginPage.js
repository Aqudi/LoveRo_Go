import React,{useState} from 'react';
import styled from 'styled-components';
import main_img from '../images/img_main.jpg';
import LoginForm from '../containers/auth/LoginForm';
import RegisterModal from './RegisterModal';
import ModalPortal from './ModalPortal';
import Button from '../components/common/Button';

const Wrapper = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   bottom: 0;
   right: 0;
   background-image: url(${main_img});
   background-size: cover;
   background-repeat: no-repeat;
   font-family: 'NanumSquare', sans-serif;
`;
const Content_Wrapper = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   padding: 40px;
   box-sizing: border-box;
`;
const Header = styled.div`
   position: relative;
   float: right;
   width: 400px;
   height: 200px;
   text-align: left;
`;
const Input_Wrapper = styled.div`
   position: absolute;
   bottom: 0;
   right: 40px;
   width: 200px;
   height: 200px;
   text-align: center;
`;
const ButtonWithMarginTop = styled(Button)`
  background: #2d2d2c;
  font-size: 12px;
`;
const LoginPage = () => {
   const [modalShow, setModalShow] = useState(false);
   function open() {
       setModalShow(true);
     }
   function close() {
       setModalShow(false);
     }
   return(
       <Wrapper>
           <Content_Wrapper>
               <Header>
                   <h3>"당신이 사랑하는 사람들의 하루를 기록하는 공간입니다."</h3>
                   <h1>차차의 성장일기</h1>
               </Header>
               <Input_Wrapper>
                   <LoginForm></LoginForm>
                   <ButtonWithMarginTop onClick={open}>회원가입
                   </ButtonWithMarginTop>
                   {modalShow===true && (
                     <ModalPortal>
                       <RegisterModal onClose={close} />
                     </ModalPortal>
                   )}
               </Input_Wrapper>
           </Content_Wrapper>
       </Wrapper>
    );
};
export default LoginPage;
