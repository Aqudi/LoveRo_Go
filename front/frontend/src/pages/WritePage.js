import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

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
    max-width: 500px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
`;

const WritePage = ( ) => {
    return(
        <Wrapper>
            <Content_Wrapper>
                <Header_Wrapper>
                    <Header>
                        <h3>"당신이 사랑하는 사람들의 하루를 기록하는 공간입니다."</h3>
                        <h1>차차의 성장일기</h1>
                    </Header>
                </Header_Wrapper>
                <EditorContainer />
                <WriteActionButtonsContainer />
            </Content_Wrapper>
        </Wrapper>
    );
};

export default WritePage;