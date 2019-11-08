import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, register} from '../../modules/auth';
import Register from '../../components/auth/Register';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({history}) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const {form, auth, authError} = useSelector(({auth})=>({
		form: auth.register,
		auth: auth.auth,
		authError: auth.authError,
	}));
	const onChange = e => {
		const {value, name} = e.target;
		dispatch(
			changeField({
				form:'register',
				key:name,
				value
			})
		);
	};
	
	const onSubmit = e => {
		e.preventDefault();
		const {username, password1, password2 } = form;
		if([username, password1, password2].includes('')){
			setError('빈칸을 모두 입력해주세요');
			return;
		}
		if(password1 !== password2){
			setError('비밀번호가 일치하지 않습니다.');
			changeField({form: 'register' , key:'password1', value:''});
			changeField({form: 'register' , key:'password2', value:''});	
			return;
		}
		dispatch(register({username, password1, password2}));
	};
	
	useEffect(()=>{
		dispatch(initializeForm('register'));
	},[dispatch]);
	
	useEffect(()=>{
		if(authError){
			console.log('error');
			console.log(authError);
			if(authError.response.status === 409) {
				setError('이미 존재하는 계정명입니다');
				return;
			}
			setError('회원가입 실패');
			return;
		}
		if(auth){
			console.log('회원가입 성공');
			console.log(auth);
            history.push('/');
		}
	},[auth, authError,history]);

    return (
		<Register
			type= "register"
			form ={form}
			onChange = {onChange}
			onSubmit = {onSubmit} 
			error={error}
		/>
	);
};

export default withRouter(RegisterForm);