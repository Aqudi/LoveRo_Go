import React ,{useState, setShow} from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import RegisterModal from './RegisterModal';
import ModalPortal from './ModalPortal';

const RegisterPage = () => {
    const [modalShow, setModalShow] = useState(false);
    function open() {
        setModalShow(true);
      }

    function close() {
        setModalShow(false);
      }

	return(
	    <AuthTemplate>
            <button onClick={open}>모달 열기</button>
                    {modalShow===true && (
                      <ModalPortal>
                        <RegisterModal onClose={close} />
                      </ModalPortal>
                    )}
		</AuthTemplate>
	);
};

export default RegisterPage;