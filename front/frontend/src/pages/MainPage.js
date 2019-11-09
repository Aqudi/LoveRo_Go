import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import test_img from '../images/test_image.PNG';
import PersonalContainer from '../containers/auth/PersonalContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const Wrapper = styled.div`
    position: absolute;
    min-width: 1200px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    font-family: 'NanumSquare', sans-serif;
`;

const Content_Wrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    background-color: #faf0c8;
`;

const Header_Wrapper = styled.div`
    position: relative;
    max-width: 1000px;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 85px;
    border-bottom: solid 0.5px #2d2d2c;
`;

const Header = styled.div`
    position: relative;
    float: right;
    width: 400px;
    height: 85px;
    text-align: left;
`;

const Bottom_Wrapper = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
`;

const White_Wrapper = styled.div`
    width: 235px;
    margin: 5px;
    height: 300px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.26);
    display: inline-block;
    box-sizing: border-box;
    padding: 10px;
`;

const Image_Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    background-color: #e9ecef;
    border-radius: 12px;
`;

const MainPage = ({history}) => {
    const Go_Write= ()=>{
        history.push('/write');
    }
	return(
        <Wrapper>
            <Content_Wrapper>
                <PersonalContainer />
                <Header_Wrapper>
                    <Header>
                        <h3>"당신이 사랑하는 사람들의 하루를 기록하는 공간입니다."</h3>
                        <h1>차차의 성장일기</h1>
                    </Header>
                    <button className="button_black" onClick={Go_Write}>
                        일기쓰기</button>
                </Header_Wrapper>
                <PostListContainer />
                <PaginationContainer />
            </Content_Wrapper>
        </Wrapper>
	);
};

export default MainPage;