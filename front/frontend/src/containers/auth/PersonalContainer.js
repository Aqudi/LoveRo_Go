import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PersonalButton from '../../components/auth/PersonalButton';
import {logout} from '../../modules/auth';
import { withRouter } from 'react-router-dom';

const PersonalContainer = ({history}) => {
    const {checkUser} = useSelector(({auth})=>({checkUser:auth.checkUser}));
    const dispatch = useDispatch();
    const onLogout = () =>{
        dispatch(logout());
        history.push('/');
    };
    return <PersonalButton user = {checkUser} onLogout={onLogout} />;
};
export default withRouter(PersonalContainer);