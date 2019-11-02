import React from 'react';
import Button from '../components/common/Button';

const MainPage = () => {
	return(
		<div>
            MainPage
            <Button className="btn" to="/login">
              로그인
            </Button>
        </div>
	);
};

export default MainPage;